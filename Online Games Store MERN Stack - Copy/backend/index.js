const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const gameRoute=require('./routes/games')

//database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}

//middleware
dotenv.config()
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173',credentials:true}))
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/games",gameRoute)

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})
