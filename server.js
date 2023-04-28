const express = require("express");
const session = require('express-session')
const mongoose = require("mongoose")
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/sessions',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(res=>{
    console.log('mongodb connected')
});
app.use(session({
   secret: 'key that will sign cookie' ,
   resave:false,
   saveUninitialized: false
}))

app.get("/",(req,res)=>{
    // req.session.isAuth = true;
    // console.log(req.session);
    // console.loh(req.session.id)
    res.send("heyyyy");
})

app.listen(5000, console.log("server is running"))