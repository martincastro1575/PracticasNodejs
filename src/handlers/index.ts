import { Request, Response } from "express"
import { validationResult } from "express-validator"
import slug from 'slug'
import User from "../models/User"
import { hashPassword } from "../utils/auth"

export const createAccount = async(req: Request,res: Response)=>{


    //manejando errores
    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }

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
