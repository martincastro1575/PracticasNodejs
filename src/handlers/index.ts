import { Request, Response } from "express"
import User from "../models/User"

export const createAccount = async(req: Request,res: Response)=>{

    const { email } = req.body

    const userExists = await User.findOne({email})

    if (userExists) {
        const error = new Error('Usuario ya registrado')
        res.status(409).json({error:error.message})
        return
    }
    

    await User.create(req.body)

    res.status(201).send('Registro Creado correctamente')
}
