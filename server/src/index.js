const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query{
    info: String!
}`;

const resolvers = {
    Query: {
        info: () => 'This is Info',
    },
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

const options = {
    port: 4000,
};

server.start(options, () => console.log(`Server is on at ${options.port}`));
