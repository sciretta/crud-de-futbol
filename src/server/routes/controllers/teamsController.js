const Player = require('../../models/player');
const Team = require('../../models/team');


// @desc    get teams.
// @route   GET /api/teams/
// @access  Public

exports.allTeams = async (req,res)=>{
  try{
    const teams = await Team.find()
    return res.status(200).json({
      confirmation:'success',
      count:teams.length,
      data:teams
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}


// @desc    save current team.
// @route   POST /api/teams/
// @access  Public

exports.saveTeam = async (req,res)=>{
  try{
    const jugadores = await Player.find()
    .then(res=>res.length+1)

    await Team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

    const team = await Team.create(req.body)
    return res.status(200).json({
      confirmation:'success',
      data:team
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}


// @desc    delete current team.
// @route   DELETE /api/teams/
// @access  Public

exports.deleteTeam = async (req,res)=>{
  try{
    const jugadores = await Player.find({equipo:req.body.equipo})
    .then(res=>res.length-1)

    await Team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

    const team = await Team.findOneAndRemove(req.body)
    return res.status(200).json({
      confirmarion:'succes',
      data:team
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}
