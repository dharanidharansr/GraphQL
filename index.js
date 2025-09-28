import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connect } from "mongoose";
import typeDefs from "./schema.js";
import resolvers from "./resolver.js";


async function startServer() {
  await connect("mongodb+srv://siu:147852369@step.xrraelz.mongodb.net/twitterclone");
  console.log("Connected to MongoDB");

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at ${url}`);
}

startServer();