import { Request, Response } from "express"
import slug from 'slug'
import User from "../models/User"
import { checkPass, hashPassword } from "../utils/auth"

export const createAccount = async(req: Request,res: Response)=>{

    console.log('Estoy en la creacion');
    
    const { email, password } = req.body
    const handle = slug(req.body.handle,'')
    
    const userExists = await User.findOne({email})
    const handleExits = await User.findOne({handle})

    if (userExists) {
        const error = new Error('Email ya registrado')
        res.status(409).json({error:error.message})
        return
    }

    if (handleExits) {
        const error = new Error('Nombre de usuario ya registrado')
        res.status(409).json({error:error.message})
        return
    }
    
     const user = new User(req.body)
     user.password = await hashPassword(password)
     user.handle = handle

     await user.save() 

    /* esta es otra forma de almacenar lo datos del documento en el collection
    const hash = await hashPassword(password)

    req.body.password = hash

    User.create(req.body)
    */

    res.status(201).send('Registro Creado correctamente')
}

export const login = async(req:Request,res:Response)=>{

    
    
    const { email, password } = req.body

    const user = await User.findOne({email})

    //Aqui se comprueba si existe el usuario
    if (!user) {
        const error = new Error('Email no registrado')

        res.status(404).json({error:error.message})
    }

    //Aqui se comprueba si el password es valido
    const isValidpassword = await checkPass(password,user.password)
    

    if (!isValidpassword) {
        const error = new Error('Clave invalida')
        res.status(401).json({error:error.message})
    }

    res.send('Usuario Autenticado.....!')
    
}