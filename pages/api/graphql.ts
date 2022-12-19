import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next/types';
import NextCors from 'nextjs-cors';
import { resolvers } from '@graphqlGenerated/resolvers';
import { types } from '@graphqlGenerated/types';

const HandleServer = async (req: NextApiRequest, res: NextApiResponse) => {
  const server = new ApolloServer({
    typeDefs: [...types],
    resolvers: [...resolvers],
    introspection: true,
  });

  await server.start();

  return server.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
    origin: '*',
    optionsSuccessStatus: 204,
  });
  await HandleServer(req, res);
}
