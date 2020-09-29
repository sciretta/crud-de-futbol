require('./database.connect');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
require('colors');

function getRootURL(folder){
  let URL='';
  for(let i of __dirname.split(path.sep)){
    if(i==='C:'){
      URL=i;
    }else if(i==='src'){
      break
    }
    else{
      URL=URL+path.sep+i;
    }
  }
  return URL + path.sep + folder;
}

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(express.static(getRootURL('public')));

app.set('port',4000);

app.listen(app.get('port'),()=>{
  console.log('Servidor inicializado.'.bgGreen.black);
});

app.use('/api/players',require('./routes/players.routes'));
app.use('/api/teams',require('./routes/teams.routes'));
