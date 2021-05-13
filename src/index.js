const express = require('express')
const router = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express()

//Settings
app.set('port', process.env.port || 3000);

//enables cors
app.use(cors ( ));

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
app.use(router);

//starting the server
app.listen(app.get('port'), () => {
    console.log('API-Emails', app.get('port'));
    
  });

