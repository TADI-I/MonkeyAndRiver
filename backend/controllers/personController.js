const express = require('express');

module.exports = function(connectionString){

    //Creating routes so that we can link/route our endpoints
    const app = express.Router();

    //post request
    //after you create SQL query.
    //then handle error 
    app.post('/createPerson', (req, res) => {

        const id = req.body.id;
        const name = req.body.name;

        connectionString.query('insert into my_person(name) values(?)', [name], (err, result) =>{

            if(err){

                console.log(err);
            }
            else{

                res.send('Posted!!');
            }
        })
    });


    //get request
    app.get('/fetchAllPerson', (req, res) =>{

        connectionString.query('select * from my_person', (err, result) => {

            if(err){

                console.log(err);
            }
            else{

                res.send(result);
            }
        })
    });

    app

    return app;
}