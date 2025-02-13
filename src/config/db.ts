import mongoose from "mongoose";
import colors from 'colors'

export const connectDB = async () => {

    try {
        
        const { connection } = await mongoose.connect(process.env.MONGO_URI)

        const url = `${connection.host}:${connection.port}`
        
        
        console.log(colors.blue.bold(`MongoDB Conectado en: ${url}`));
        
    } catch (error) {
        console.log(colors.bgYellow.red.italic(error.message));
        process.exit(1)
        
    }

}