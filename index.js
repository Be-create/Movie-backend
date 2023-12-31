import { connectdatabase } from './database/index.js';
import express from "express"
import Router from "./Routes/index.js"
import cors from "cors"

let app = express()
app.use(cors()) 
app.use(express.json())
app.get("/",(req,res)=>{
res.send("server started")
})


app.use(Router)
const port = process.env.PORT ||8080

app.listen(port,async(req,res)=>{
    
  await  connectdatabase()
     
        console.log(` listening on http://localhost:${port}`)
   
})