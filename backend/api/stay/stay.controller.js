import { stayService } from "./stay.service.js"

export async function getStays (req, res) {
    try {
        const filterBy = {
            type: req.query.type || ''
    }
        const stays = await stayService.query(filterBy)

        // let visitCount = req.cookies.visitCount || 0
        // visitCount++
        // res.cookie('visitCount', visitCount)
        res.send(stays)
    } catch (err) {
        res.status(400).send(`Couldn't get stays`)
    }
}

export async function getStay (req, res){
    const {stayId} = req.params

    try {
        const stay = await stayService.getById(stayId)
        res.send(stay)
    } catch (err) {
        res.status(400).send(`Couldn't get stay`)
    }
}


export async function updateStay (req, res){
    const { name, type } = req.body
    const {stayId} = req.params
    const stayToSave = { _id: stayId, name, type}
    try {
        var savedStay = await stayService.save(stayToSave)
        res.send(savedStay) 
    } catch (err) {
        res.status(400).send(`Couldn't save stay`)
    }
}

export async function setStay (req, res){
    console.log('req.body', req.body)
    const { name, type } = req.body
    const stayToSave = {name, type}
    try {
        var savedStay = await stayService.save(stayToSave)
        res.send(savedStay) 
    } catch (err) {
        res.status(400).send(`Couldn't save stay`)
    }
}

export async function deleteStay (req, res){
    const {stayId} = req.params

    try {
        stayService.remove(stayId)
        res.send('Deleted Ok')
    } catch (error) {
        res.status(400).send(`Couldn't remove stay`)
    }
}

