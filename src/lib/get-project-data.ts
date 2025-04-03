export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: number;
  language: string;
}

export async function getGithubProjectData(): Promise<Repo[] | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/github`);

  const data = await res.json();

  if (data.error) {
    console.warn({
      message: "Failed to fetch GitHub repositories",
      error: data.error,
      status: res.status,
    });
    return null;
  }
  return data;
}
