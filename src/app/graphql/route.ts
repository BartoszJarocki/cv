import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { type NextRequest, NextResponse } from "next/server";
import { buildSchema } from "type-graphql";
import { MeResolver } from "../../apollo/resolvers";

let apolloServer: ApolloServer;
let handler: any;

try {
  const schema = await buildSchema({
    resolvers: [MeResolver],
  });

  apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: process.env.NODE_ENV !== "production",
    formatError: (err) => {
      // Log error for debugging in development
      if (process.env.NODE_ENV !== "production") {
        console.error("GraphQL Error:", err);
      }

      // Return sanitized error for production
      return {
        message:
          process.env.NODE_ENV === "production"
            ? "Internal server error"
            : err.message,
        code: err.extensions?.code,
        path: err.path,
      };
    },
  });

  handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req) => ({ req }),
  });
} catch (error) {
  console.error("Failed to initialize Apollo Server:", error);

  // Fallback handler for initialization errors
  handler = async () => {
    return NextResponse.json(
      { error: "GraphQL server initialization failed" },
      { status: 500 }
    );
  };
}

export { handler as GET, handler as POST };
