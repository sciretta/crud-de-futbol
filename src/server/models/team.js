const {Schema,model} = require('mongoose');

const teamSchema = new Schema({
    nombre:{type:String,trim:true,default:''},
    pais:{type:String,trim:true,default:''},
    jugadores:{type:Number,default:0}
});

module.exports = model('team',teamSchema);