export const typeDefs = `

    type Query {
        ping: String
        mascotas: [Pet]
        duenos: [Dueno]
        visita: [Visita]
        duenos2(id: ID!):[Dueno]
    }
    type Pet {
        id: ID!
        nombre: String!
        dueno: Dueno
        visita: [Visita!]!
        
    }
    type Dueno {
        id: ID!
        nombre: String!
        mascota: [Pet] 
    }
    type Visita{
        id: ID!
        comentario: String!
        mascota: Pet
    }
`;
//devolvera null, porque no sabe como recuperar
//no tinee un objeto tinee un string
//como buscarlo}? , por el id
