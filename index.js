import { connectdatabase } from './database/index.js';
import Router from "./Routes/index.js"
import express from "express";
import cors from "cors"
let app = express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
res.send("server started")
})


app.use(Router)
const port = 8080

app.listen(port,async(req,res)=>{
    await  connectdatabase()
        console.log(` listening on http://localhost:${port}`)
   
})