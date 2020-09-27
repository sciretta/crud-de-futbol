const express = require('express');
const router = express.Router();
const { 
  allTeams,
  findIdTeam,
  saveTeam,
  deleteTeam
} = require('./controllers/teamsController');

router.get('/',allTeams);
router.post('/',saveTeam);
router.delete('/',deleteTeam);
router.get('/:id',findIdTeam);

module.exports = router;