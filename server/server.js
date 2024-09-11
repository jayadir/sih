import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middleware/error.js';
import authRoutes from './Routes/authRoutes.js'
dotenv.config();


//middleware
const app = express()
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/auth',authRoutes)


mongoose.connect("mongodb://localhost:27017/SIH").then(()=>{
    console.log("DB Connected");
}).catch((e)=>{
    console.log(e);
});


app.use(errorMiddleware)

app.listen(9000, () =>
{
console.log('Server started')
});
