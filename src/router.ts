import { Router } from 'express';
import { createAccount } from './handlers';

const router = Router()

//Autenticacion y registro de usuario
router.post('/auth/register', createAccount)

 export default router