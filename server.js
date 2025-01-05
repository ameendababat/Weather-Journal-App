// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const press = require("express");
const bodyParser = require("body-parser");
const cors  = require("cors");
// Start up an instance of app
const app = press();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(press.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(press.static('website'));


// Setup Server

app.get("/DataALl",(req,res)=>{
    res.send(projectData).status(200);
});

app.post("/addData",(req,res)=>{
    projectData =req.body;
    console.log(projectData);

    res.send(projectData).status(200);
});








const server = app.listen(5000,()=>{
    console.log("I am listen in port number 5000!");
})


