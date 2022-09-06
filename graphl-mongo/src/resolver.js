//parte 2 crear task tipo personalizado
//parte 3 mutations
import {task} from './sample';

import User from "./models/User";

export const resolvers = {
    Query:{
        hello: () =>{
            return 'hello world con graphQL'
        },
        greet(root,args, ctx){
            console.log (ctx)
            //{name}
            //args
            //console.log(args.name);
            //agregam,os context despues de mongodb
            return `Hello! ${args.name}`
        },
        tasks(){
            return task
        },
        async Users(){
           return await User.find(); //error resolver
        }
        
    },
    Mutation:{
        createTask(_,{input}){
           // console.log(input);
            //guardarlos
            input._id = task.length;
            //crear un id
            task.push(input);
            console.log(task);
            return input;
        },
       async createUser(_,{input}){ //el primer dato no se usara
            // console.log(input);
            const newUser =  User(input)
            await newUser.save(); //haces la consulta y luego continuas
            console.log(newUser);
             return newUser;
         },
      async  deleteUser(_, {_id}){
              return await  User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id,input}){
            return await User.findByIdAndUpdate(_id, input, {new: true});
        }
    }

};