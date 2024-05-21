import fs from 'fs'
import { loggerService } from '../../services/logger.service.js'


export const userService = {
    query,
    save,
    remove,
    getByEmail,
}

var users = readJsonFile('./data/users.json')

async function query() {
    return users
}

function getByEmail(email) {
    try {
        var user = users.find(user => user.email === email)
        if(!user) throw `Couldn't find stay with email ${email}`
        return user
    } catch (err) {
        loggerService.error(err)
        throw err
    }
}

async function save(userToSave) {
    
    try {
        if (userToSave.email) {
            var idx = users.findIndex(user =>user.email === userToSave.email)
            if(idx === -1) throw `Couldn't find user with email ${userToSave.email}`
            users.splice(idx, 1, userToSave)
        } 
        _saveUsersToFile('./data/users.json')
        return userToSave
    } catch (err) {
        loggerService.error(err)
        throw err
    }
}

function remove(email) {
    try {
        const idx = users.findIndex(user => user.email === email)
        if(idx === -1) throw `Couldn't find user with email ${email}`
        users.splice(idx, 1)
        _saveUsersToFile('./data/users.json')
    } catch (err) {
        loggerService.error(err)
        throw err
    }
}


function _saveUsersToFile(path) {
    return new Promise((resolve, reject) =>{
        const data = JSON.stringify(users, null, 2)
        fs.writeFile(path, data, (err) => {
            if(err) return reject(err)
            resolve()
        })
    })
    
}

function readJsonFile(path) {
    const str = fs.readFileSync(path, 'utf8')
    const json = JSON.parse(str)
    return json
}
