import express from 'express'
import { deleteUser, getUser, getUsers, setUser, updateUser } from './user.controller.js'
const router = express.Router()

router.get('/', getUsers)
router.get('/:email', getUser)
router.put('/:email', updateUser)
router.post('/', setUser)
router.delete('/:email', deleteUser)


export const userRoutes = router