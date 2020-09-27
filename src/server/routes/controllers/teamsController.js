const Player = require('../../models/player');
const Team = require('../../models/team');

exports.allTeams = function(req,res){
  Team.find(req.query)
  .then(teams=>{
    res.json({
      confirmation:'success',
      data:teams
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}

exports.findIdTeam = function(req,res){
  const id = req.params.id;
  Team.findById(id)
  .then(team=>{
    res.json({
      confirmation:'success',
      data:team
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}

exports.saveTeam = async function (req,res){
  const jugadores = await Player.find({equipo:req.body.nombre})
  .then(res=>res.length)

  Team.create({
    ...req.body,
    jugadores
  })
  .then(team=>{
    res.json({
      confirmation:'success',
      data:team
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}

exports.deleteTeam = function (req,res){
  Team.findOneAndRemove(req.body)
  .then(()=>res.send('Removed'))
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
}