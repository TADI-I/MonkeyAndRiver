
const express = require('express');

module.exports = function(connectionString, authenticate){

    const app = express.Router();

    app.use(logger)

    function logger(req, res, next){

        console.log('log')
        next()
    }

    //create the post endpoint 
    app.post('/create', authenticate, (req,res) =>{

        const id = req.body.id;
        const name = req.body.name;
        const mark = req.body.mark;

        connectionString.query('insert into my_table(name,mark) values(?,?)', [name,mark], (err,result)=>{

            if(err){

                console.log(err);
            }
            else{

                res.send("Posted!");
            }

        })
    });

    

    //create the Get endpoint
    app.get('/fetchAll', authenticate, (req, res) => {

        connectionString.query('select * from my_table', (err, result) =>{

            if(err){
                
                console.log(err);
            }
            else{
                res.json(result);
             
            }
        })
    });

    //create the Delete endpoint
    app.delete('/delete/:name', (req, res) => {

        const nameToDelete = req.params.name;

        connectionString.query('delete from my_table where name = ?', [nameToDelete], (err, result) => {

            if(err){

                console.log(err);
            }
            else{

                res.json({message: `Record with the name '${nameToDelete}' deleted.`});
                
            }
        })
    });

    //create the fetch all name endpoint and store in a list
    app.get('/fetchAllNames', (req, res) => {

        connectionString.query('select name from my_table', (err,result) => {

            if(err){

                console.log(err);
            }
            else{

                const listNames = result.map(row => row.name);
                res.json({listNames});
            }
        })
    })


    return app;

}


