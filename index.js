// 1.import express
var express = require ('express')
require('./connection')

// after connection from model(see)
const user = require ('./model/user');

// 2.initialization
var app = express();
// hence all properties of express will be present in vraiable app

// middleware to post to db,to accept data coming in json format
app.use(express.json())

// 3.api
app.get('/add',(req,res)=>{
    res.send("hello");

})

app.get('/log',(req,res)=>{
    res.send("login");
})
// "/" is the path,adding sth from front end to back end 'req"

// to add data to db
// async await keyword pair
app.post('/add',async(req,res)=>{

    try {
        console.log(req.body)
        await user(req.body).save()
        // to return a message lik u have logged in
        res.send({message:"data added successfully"})
    } catch (error) {
        console.log(error)
    }
})

// to view all the users,"user" is the db model
app.get('/view',async(req,res)=>{
    try {
        const data = await user.find()
        res.send(data)
    } catch (error) {
        
    }
})

// to delete any user
app.delete('/remove/:id' ,async(req,res)=>{
    try {
       console.log(req.params.id)
        var data = await user.findByIdAndDelete(req.params.id);
        res.send({message:"deleted"})
    } catch (error) {
        console.log(error)
        
    }
})

// to update  a user
app.put('/edit/:id', async(req,res)=>{
    try {
        var data = await user.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:'updated successfully',data})
    } catch (error) {
        
    }
})


// 4.port allocation
app.listen(3000,()=>{
    console.log("Port is up and running")

})
// filename is index.js and type in terminal
// npm i -g nodemon
// nodemon index.js
// setExecutionpolicy unrestricted