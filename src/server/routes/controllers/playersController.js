const Player = require('../../models/player');
const Team = require('../../models/team');

exports.allPlayers = function(req,res){
  let filtro = req.query;
  if(req.query.edad){
    filtro = {
      edad:{$gt:req.query.edad}
    };
  }
  Player.find(filtro)
  .then(players=>{
    res.json({
      confirmation:'success',
      data:players
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    })
  })
}

exports.findIdPlayer = function(req,res){
  const id = req.params.id;
  Player.findById(id)
  .then(player=>{
    res.json({
      confirmation:'success',
      data:player
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}

exports.savePlayer = async function (req,res){
  const jugadores = await Player.find({equipo:req.body.equipo})
  .then(res=>res.length+1)

  await Team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

  Player.create(req.body)
  .then(player=>{
    res.json({
      confirmation:'success',
      data:player
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}

exports.deletePlayer = async function(req,res){
  const jugadores = await Player.find({equipo:req.body.equipo})
  .then(res=>res.length-1)

  await Team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

  Player.findOneAndRemove(req.body)
  .then(()=>res.send('Removed'))
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}
