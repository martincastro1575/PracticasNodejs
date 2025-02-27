import { Router } from 'express';
import { body } from 'express-validator'
import { createAccount, login } from './handlers';
import { handleInputErros } from './middlewares/validation';


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

    ,handleInputErros,createAccount)

 router.post('/auth/login',
    body('email')
    .isEmail()
    .withMessage('Complete el campo E-Mail'),
    body('password')
    .notEmpty()
    .withMessage('El password es requerido'),
    handleInputErros,
    login
 )   

 export default router