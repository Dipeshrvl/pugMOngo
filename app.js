const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// for render the static files 
app.use("/public",express.static('public'))

// set view engine 
app.set('view engine','pug');

// if you want to set view folder another 
// app.set("views",path.join(__dirname,"/DDD"))

app.get("/",(req,res)=>{
    res.send("Hello from express js");
})

app.get("/drvl",(req,res)=>{
    const params = {
        "title" : "Dance India Dance",
        "headLine" : "Welcome To Our Dance Acadamy"
    }
    res.status(200).render("site",params)
})

app.get("/contect",(req,res)=>{
    const params = {
        "title" : "Drvl | Contect US",
        "headLine" : "Contect Us"
    }
    res.status(200).render("contectus",params)
})

app.get("/home",(req,res)=>{
    const params = {
        "title" : "Dance India Dance",
        "headLine" : "Welcome To Our Dance Acadamy"
    }
    res.status(200).render("home",params)
})

app.get("/pug",(req,res)=>{
    const para = "Hello, I am Dipesh Raval."
    res.status(200).render("index",{"title" : "Pug Template", "Line" : "Welcome To Our Pug Template","para" : para});
})

app.get("/about",(req,res)=>{
    res.render("about",{ title : "About Page",msg : "Dipesh Raval"})
})

app.listen(port,()=>{
    console.log(`Litening at port ${port}`);
})