import {makeExecutableSchema} from 'graphql-tools';
import { resolvers } from "./resolver";

const typeDefs = `

type Query{
    hello:String 
    greet(name: String!): String
    tasks: [Task]
    Users: [User]
}
type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
}
type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int!
}
type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id:ID, input: UserInput): User
}
input TaskInput{
    title: String!
    description: String!
    number: Int
}
input UserInput{
    firstname: String!
    lastname: String!
    age: Int!

}
    `;
//types definitition. que podemos consultar?
//type query {hello}
//Cuando consultes a trabes de la ruta del resolver arroja eso
//devuelve un json para usar en la aplicacion
//grapql types (tipos de datos basicos)
//31:26
//podria ser schema la ruta y resolver el controlador
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

/* 
Query de mutation 
mutation{
    createTask(input:{
      title: "TAREA UNOS",
      description "Tarea meh",
      
    })
    {
      _id
      title
      description
      number
    }
  } */

  //en una rest api tendriamos que crear muchas rutas para sacar los datos que queramos
  //crear el esquema y consultar
  //