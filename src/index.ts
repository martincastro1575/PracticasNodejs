import app from "./server";


const port = process.env.PORT || 3500

app.listen(port,() => {
    console.log('Servidor funcionando en el puerto:',port);
    
})
