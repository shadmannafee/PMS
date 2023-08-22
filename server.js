require('dotenv').config()


const express = require('express')

const mongoose = require('mongoose') // we are basically importing mongoose package
  
const projectRoutes = require('./routes/projects')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/projects',projectRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & tuning into port',process.env.PORT)
        })
    }) 
    .catch((error) => {
        console.log(error)
    })  

