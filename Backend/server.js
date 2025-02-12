require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
//express app
const app=express()
const workoutRoutes=require('./routes/workouts')
const userRoutes=require('./routes/user')
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

//routes

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


//connecting to datbase
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('Connected to db & Listening at',process.env.PORT);
})
  })
  .catch((err)=>{
    console.log(err);
  })

