import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'

const app = express()


app.use(bodyParser.json({imit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({ imit: "30mb", extended: true }))
app.use(cors())

// Routes
app.use('/posts', postRoutes)


// MongoDB Connenctions
const CONNECTION_URL = "mongodb+srv://shanto:shanto123456@cluster0.8oki3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const port = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, () => {
    console.log("database connnected")
})



app.listen(port,  ()=> console.log(`server running on ${port}`)) 

