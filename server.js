import express from "express";
import dotenv from "dotenv"
import router from "./routes/auth/userRouter.js";
import cors from "cors"
const app = express()
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/api/auth', router)
app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING ON PORT", PORT)
})


app.get('/', async(req, res)=>{
    return res.json({messgae: "hello from express server"})
})
