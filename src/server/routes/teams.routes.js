const express = require('express');
const router = express.Router();
const { 
  allTeams,
  saveTeam,
  deleteTeam
} = require('./controllers/teamsController');

router.route('/')
.get(allTeams)
.post(saveTeam)
.delete(deleteTeam)

module.exports = router;