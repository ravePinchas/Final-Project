import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'


import { loggerService } from './services/logger.service.js'
import { stayRoutes } from './api/stay/stay.routes.js'
import { userRoutes } from './api/user/user.routes.js'


const corsOptions = {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true
}


const port = process.env.PORT
console.log('port: ', port);

const app = express()
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())


app.use('/api/stay', stayRoutes)
app.use('/api/user', userRoutes)

// app.get('/api/stay', async (req, res) => {
//     try {
//         const filterBy = {
//             type: req.query.type || ''
//     }
//         const stays = await stayService.query(filterBy)

//         // let visitCount = req.cookies.visitCount || 0
//         // visitCount++
//         // res.cookie('visitCount', visitCount)
//         res.send(stays)
//     } catch (err) {
//         res.status(400).send(`Couldn't get stays`)
//     }
// })

// app.get('/api/stay/:stayId', async (req, res) => {
//     const {stayId} = req.params

//     try {
//         const stay = await stayService.getById(stayId)
//         res.send(stay)
//     } catch (err) {
//         res.status(400).send(`Couldn't get stay`)
//     }
// })

// app.put('/api/stay/:stayId', async (req, res) => {
//     const { name, type } = req.body
//     const {stayId} = req.params
//     const stayToSave = { _id: stayId, name, type}
//     try {
//         var savedStay = await stayService.save(stayToSave)
//         res.send(savedStay) 
//     } catch (err) {
//         res.status(400).send(`Couldn't save stay`)
//     }
// })

// app.post('/api/stay', async (req, res) => {
//     console.log('req.body', req.body)
//     const { name, type } = req.body
//     const stayToSave = {name, type}
//     try {
//         var savedStay = await stayService.save(stayToSave)
//         res.send(savedStay) 
//     } catch (err) {
//         res.status(400).send(`Couldn't save stay`)
//     }
// })

// app.delete('/api/stay/:stayId', async (req, res) => {
//     const {stayId} = req.params

//     try {
//         stayService.remove(stayId)
//         res.send('Deleted Ok')
//     } catch (error) {
//         res.status(400).send(`Couldn't remove stay`)
//     }
// })

app.get('/api/stay/:stayId/reservation', (req, res) => {
    res.send('hello')
})

app.get('/api/hosting', (req, res) => {
    res.send('hello')
})

app.get('/**', (req, res) => {
    res.sendFile(path.resolove('public/index.html'))
})



app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
    loggerService.info(`Up and running on port ${port}`)
})