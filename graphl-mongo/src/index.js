import express  from "express"
import { graphqlHTTP } from "express-graphql";
import schema from './schema';
import { connect } from "./database";
//integrar graphql en express

const app = express();
connect();
app.get('/', (req,res) =>{
    res.json({
        message: 'HELLO WORLD'
    })
});

//const schema ={};
app.use('/graphql' ,graphqlHTTP({
//2.- configurar
graphiql: true,
schema: schema,
//parte despues de mongoose
context:{
    messageId: 'test'
}
}));
//EL CONTEXT ES PARA PASAR INFORMACION ENTRE LOS RESOLVERS
//AUTENTICADO USUARIOS
//CADENA DE CONEXION
//Utilizaremos modelos

app.listen(4000, () => console.log('Server on port 4000'));
