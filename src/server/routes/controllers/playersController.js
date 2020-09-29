const Player = require('../../models/player');
const Team = require('../../models/team');

// @desc    get all players.
// @route   GET /api/players/
// @access  Public

exports.allPlayers = async (req,res)=>{
  try{
    const players = await Player.find()
    return res.status(200).json({
      confirmation:'success',
      count:players.length,
      data:players
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}

// @desc    save current player.
// @route   POST /api/players/
// @access  Public

exports.savePlayer = async (req,res)=>{
  try{
    const jugadores = await Player.find({equipo:req.body.equipo})
    .then(res=>res.length+1)

    await Team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

    const player = await Player.create(req.body)
    return res.status(200).json({
      confirmation:'success',
      data:player
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}

// @desc    delete current player.
// @route   DELETE /api/players/
// @access  Public

exports.deletePlayer = async (req,res)=>{
  try{
    const jugadores = await Player.find({equipo:req.body.equipo})
    .then(res=>res.length-1)

    await Team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

    const player = await Player.findOneAndRemove(req.body)
    return res.status(200).json({
      confirmarion:'succes',
      data:player
    })
  }catch(err){
    return res.status(500).json({
      confirmation:'fail',
      message:err.message
    })
  }
}
