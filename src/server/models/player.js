const {Schema,model} = require('mongoose');

const playerSchema = new Schema({
    nombre:{type:String,trim:true,default:''},
    apellido:{type:String,trim:true,default:''},
    edad:{type:Number},
    equipo:{type:String,default:''},
    posicion:{type:String,trim:true,default:''}
});

module.exports = model('player',playerSchema);
