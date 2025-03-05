import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
import { connectToMongoDB } from "./db.js"
import bookRoute from './route/bookRoute.js'
import userRoute from './route/userRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config();

const port = process.env.PORT || 4000;
const url = process.env.MongoDBURI

// connect to DB
connectToMongoDB(url)

//routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})