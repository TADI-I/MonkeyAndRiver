const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');

//jwt
const jwt = require('jsonwebtoken');

//for env file
require('dotenv').config();

//import the function basically linking the main with the controller
const markController = require('./controllers/MarkController');
const personController = require('./controllers/personController');

var app = express();
app.use(bodyParser.json());


// Token configration (jwt)
const users = [{id : 1 , username: 'TeamA', password: "1234"}];
const secret = process.env.JWT_SECRET || 'secret123';


//database connection variable
const connectionString = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connectionString.connect(err =>{

    //if the connection fail what will happen

    if(err){

        console.log(err)
        return;
    }
    else{

        console.log("connected!!!")
    }
});


//login and generate token (JWT)
app.post('/login', (req, res) => {

    const {username, password} = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if(!user) return res.status(401).json({ error: 'invalid credential'});


    const token = jwt.sign({ id: user.id, username: user.username}, secret, { expiresIn: '1h'});


    res.json({ token });

});


//middleware to protect the routes
function authenticate(req, res, next){

    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if(!token) return res.status(403).json({ error: 'No token provided'});


    jwt.verify(token, secret, (err, user) => {
        
        if(err) return res.status(401).json({error: 'invalid token'});
        req.user = user;
        next();
    })
}


//pass the connection to the route module for mark controller only
//also making sure that the endpoints are accessible with token 
const markRoutes = markController(connectionString, authenticate);
app.use('/api', markRoutes);

const personRoutes = personController(connectionString);
app.use('/api', personRoutes);


app.listen(3000, (err)=>{

    if(err){

        console.log(err)
    }
    else{
        
        console.log("on port 3000")
    }
});