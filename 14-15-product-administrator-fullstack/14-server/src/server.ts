import express from "express"
import colors from "colors"
import swaggerUi from "swagger-ui-express"
import router from "./router"
import db from "./config/db"
import swaggerSpec, { swaggerUiOptions } from "./config/swagger"
import cors, { CorsOptions } from "cors"
import morgan from "morgan"

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

// Enable Connections
const corsOptions: CorsOptions = {
    origin: function (requestOrigin, callback) {
        if (requestOrigin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    },
}

server.use(cors(corsOptions))

// Read form data
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server