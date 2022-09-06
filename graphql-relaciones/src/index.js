//npm install @babel/core @babel/cli @babel/preset-env @babel/node nodemon -D
import { GraphQLServer } from "graphql-yoga";
import {typeDefs} from "./graphql/typesDef";
import {resolvers } from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs,
    resolvers
    //2.-no hay esquema definido, error porque no hay resolver
});

server.start({port: 3000}, ({port}) =>{
    console.log('Server is running', port);
    //1.- hacer resolvers y types
})