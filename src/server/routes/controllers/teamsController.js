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
    const jugadores = await Player.find({equipo:req.body.nombre})
    .then(res=>res.length)

    const team = await Team.create({...req.body,jugadores:jugadores})
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
    const team = await Team.findByIdAndRemove(req.body._id)
    
    return res.status(200).json({
      confirmarion:'success',
      data:team
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}
