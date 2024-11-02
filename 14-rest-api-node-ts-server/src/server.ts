import express from "express"
import colors from "colors"
import router from "./router"
import db from "./config/db"

// Connect to the database
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue.bold('Connection has been established successfully.'))
    } catch (error) {
        console.error(colors.red.bold(`Unable to connect to the database: ${error}`))
    }
}
connectDB()

// Express Instance
const server = express()

// Read form data
server.use(express.json())

server.use('/api/products', router)

export default server