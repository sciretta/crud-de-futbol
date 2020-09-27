const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/leo';

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Conectado a la db'))
.catch(err=>console.error(err))

module.exports = mongoose;