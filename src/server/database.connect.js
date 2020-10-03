const mongoose = require('mongoose');
require('colors');

const URL = 'mongodb://localhost:27017/leo';

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log('Conectado a la base de datos.'.bgGreen.black))
.catch(err=>{
  if(err.message.search("connect ECONNREFUSED")!==-1){
    console.error("Abrir mongod.".bgRed.white)
  }else{
    console.error(`Error de conexion a la base de datos:${err.message}`.bgRed.white)
  }
})

module.exports = mongoose;