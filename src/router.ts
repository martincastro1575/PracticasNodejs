import { Router } from 'express';
import { body } from 'express-validator'
import { createAccount } from './handlers';

const router = Router()

//Autenticacion y registro de usuario
router.post('/auth/register', 
    
    body('handle')
    .notEmpty()
    .withMessage('Complete el campo handle'),

    body('name')
    .notEmpty()
    .withMessage('Complete el campo Nombre'),

    body('email')
    .isEmail()
    .withMessage('Complete el campo E-Mail'),

    body('password')
    .isLength({min:8})
    .withMessage('EL password, minimo debe ser de 8 caracteres')

    ,createAccount)

    

 export default router