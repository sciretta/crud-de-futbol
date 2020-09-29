const express = require('express');
const router = express.Router();
const { 
  allPlayers,
  savePlayer,
  deletePlayer
} = require('./controllers/playersController');

router.route('/')
.get(allPlayers)
.post(savePlayer)
.delete(deletePlayer)

module.exports = router;
