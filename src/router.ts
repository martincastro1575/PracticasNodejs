import { Router } from 'express'

const router = Router()

//Autenticacion y registro de usuario
router.post('/auth/register',(req,res)=>{
    console.log(req.body);
    
})

 export default router