import { userService } from "./user.service.js"

export async function getUsers (req, res) {
    try {
        const users = await userService.query()
        // let visitCount = req.cookies.visitCount || 0
        // visitCount++
        // res.cookie('visitCount', visitCount)
        res.send(users)
    } catch (err) {
        res.status(400).send(`Couldn't get users`)
    }
}

export async function getUser (req, res){
    const {email} = req.params

    try {
        const user = await userService.getByEmail(email)
        res.send(user)
    } catch (err) {
        res.status(400).send(`Couldn't get user`)
    }
}


export async function updateUser (req, res){
    const { name, type } = req.body
    const {email} = req.params
    const userToSave = { email: email, name, type}
    try {
        var savedUser = await userService.save(userToSave)
        res.send(savedUser) 
    } catch (err) {
        res.status(400).send(`Couldn't save stay`)
    }
}

export async function setUser (req, res){
    console.log('req.body', req.body)
    const { name, type } = req.body
    const userToSave = {name, type}
    try {
        var savedUser = await userService.save(userToSave)
        res.send(savedUser) 
    } catch (err) {
        res.status(400).send(`Couldn't save stay`)
    }
}

export async function deleteUser (req, res){
    const {email} = req.params

    try {
        userService.remove(email)
        res.send('Deleted Ok')
    } catch (error) {
        res.status(400).send(`Couldn't remove user`)
    }
}

