import { mascotas } from "../data/mascotas";
import { duenos  } from "../data/duenos";
import {visitas} from "../data/visitas";

export const resolvers = {
    Query: {
        ping(){
            return null;
        },
        mascotas(){
            return mascotas;
        },
        duenos2(ctx,args,root,obj){
         
                return duenos.filter(v =>{
                      return v.id ==  args.id
                      /* console.log(v.id)
                      console.log(args.id)
                      return v.duenos  */
                })
             
            //return duenos;
        }
       ,
        duenos(){
            return duenos;
        },
        visita(){
            return visitas;
        }
    },
    Pet:{
        dueno: ({dueno}) =>{
            
                // para ver si coincide console.log(parent)
                //arreglo para buscar
                //simulamos una llave foranea
                return duenos.find(d =>{
                    return d.id  === dueno 
                })
            },
            //al final
            visita: (parent) => {
               return visitas.filter(v =>{
                     return v.mascota ==  parent.id
               })
            }
           
        
    },
    Dueno:{
        mascota(parent) {
           
           return mascotas.filter( m =>{
               return m.dueno === parent.id;
           });
        }

    },
    Visita:{
        /* mascota(parent){
            console.log(parent.mascota);
            return mascotas[0];
        } */
        mascota(parent){
            return mascotas.find(m =>{
                return m.id === parent.mascota
            })
        }
    }
}

//realizar consulta recursiva jsjs
// el como definirlos depende meramente del resolver