import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        const url = 'mongodb+srv://root:BybxsnrFPQciUrD7@cluster0.ctg6a.mongodb.net/linktree_node_typescript'
        const { connection } = await mongoose.connect(url)

        const url2 = `${connection.host}:${connection.port}`
        
        
        console.log(`MongoDB Conectado en: ${url2}`);
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }

}