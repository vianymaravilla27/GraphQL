import mongoose from "mongoose";
//sudo service mongod start
export  async function connect(){
 try {
    await  mongoose.connect('mongodb://localhost/mongodbgrapghql',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('==> DB is connected');
 } catch(e)  {
    console.log('==> DB is down');
    console.log(e);
 }
}
