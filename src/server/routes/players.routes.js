const express = require('express');
const router = express.Router();
const { 
  allPlayers,
  findIdPlayer,
  savePlayer,
  deletePlayer
} = require('./controllers/playersController');

router.get('/',allPlayers);
router.post('/',savePlayer);
router.delete('/',deletePlayer);
router.get('/:id',findIdPlayer);

module.exports = router;
