import colors from 'colors'
import app from "./server"


const port = process.env.PORT || 3500

app.listen(port,() => {
    console.log(colors.bgGreen.green.italic(`Servidor funcionando en el puerto: ${port}`));
    
})
