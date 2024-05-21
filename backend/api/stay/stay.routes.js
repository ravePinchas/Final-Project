import express from 'express'
import { deleteStay, getStay, getStays, setStay, updateStay } from './stay.controller.js'
const router = express.Router()

router.get('/', getStays)
router.get('/:stayId', getStay)
router.put('/:stayId', updateStay)
router.post('/', setStay)
router.delete('/:stayId', deleteStay)


export const stayRoutes = router