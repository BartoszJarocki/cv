import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_API = process.env.GITHUB_API || "https://api.github.com";
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "";
  const GITHUB_SORT = process.env.GITHUB_SORT || "updated";
  const GITHUB_PER_PAGE = process.env.GITHUB_PER_PAGE || "12";

  if (!GITHUB_USERNAME) {
    return NextResponse.json(
      { error: "GitHub username is not defined" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=${GITHUB_SORT}&per_page=${GITHUB_PER_PAGE}`,
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from GitHub" },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
