import { Router } from 'express'

import { templateController } from "../controllers/template.js"

// En este archivo unicamente tendremos las rutas con los endPoints a las diversas peticiones que tienen las otras APIs o views

export const templateRouter = Router()

templateRouter.get('/', templateController.getAll)