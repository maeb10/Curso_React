import express from "express"
import colors from "colors"
import router from "./router"
import db from "./config/db"

// Connect to the database
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue.bold('Connection has been established successfully.'))
    } catch (error) {
        console.log(colors.red.bold(`Unable to connect to the database`))
    }
}
connectDB()

// Express Instance
const server = express()

// Read form data
server.use(express.json())

server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({ msg: 'Desde API' })
})

export default server