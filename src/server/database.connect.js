const mongoose = require('mongoose');
require('colors');

const URL = 'mongodb://localhost:27017/leo';

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log('Conectado a la base de datos.'.bgGreen.black))
.catch(err=>console.error(`Error:${err.message}`.bgRed.white))

module.exports = mongoose;