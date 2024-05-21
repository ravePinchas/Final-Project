// import { staysList } from './stay-list.js'
import fs from 'fs'
import { loggerService } from '../../services/logger.service.js'

export const stayService = {
    query,
    save,
    remove,
    getById,
    // createStay,
    // getDefaultFilter,
    // getFilterFromParams,
}

var stays = readJsonFile('./data/stays.json')

async function query(filterBy = {}) {
    try {
        let staysToReturn = [...stays]
        if (filterBy) {
            staysToReturn = staysToReturn.filter(stay => stay.type.toLowerCase().includes(filterBy.type.toLowerCase()))
        }
        return staysToReturn
    } catch (error) {
        loggerService.error(err)
        throw err
    }
}

async function save(stayToSave) {
    try {
        if (stayToSave._id) {
            var idx = stays.findIndex(stay =>stay._id === stayToSave._id)
            if(idx === -1) throw `Couldn't find stay with _id ${stayToSave._id}`
            stays.splice(idx, 1, stayToSave)
        } else {
            stayToSave._id = makeId()
            stays.push(stayToSave)
        }
        _saveStaysToFile('./data/stays.json')
        return stayToSave
    } catch (err) {
        loggerService.error(err)
        throw err
    }
}

async function remove(stayId) {
    try {
        const idx = stays.findIndex(stay => stay._id === stayId)
        if(idx === -1) throw `Couldn't find stay with _id ${stayId}`
        stays.splice(idx, 1)
        _saveStaysToFile('./data/stays.json')
    } catch (err) {
        loggerService.error(err)
        throw err
    }
    
}

async function getById(stayId) {
    try {
        var stay = stays.find(stay => stay._id === stayId)
        if(!stay) throw `Couldn't find stay with _id ${stayId}`
        return stay
    } catch (err) {
        loggerService.error(err)
        throw err
    }

}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function readJsonFile(path) {
    const str = fs.readFileSync(path, 'utf8')
    const json = JSON.parse(str)
    return json
}

function _saveStaysToFile(path) {
    return new Promise((resolve, reject) =>{
        const data = JSON.stringify(stays, null, 2)
        fs.writeFile(path, data, (err) => {
            if(err) return reject(err)
            resolve()
        })
    })
    
}



// // import PropTypes from 'prop-types'
// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
// import { staysList } from './stay-list.js'
// // import {stayServiceList} from "./stayList.service.js"
  
// export const stayService = {
//     query,
//     save,
//     remove,
//     getById,
//     createStay,
//     getDefaultFilter,
//     getFilterFromParams,
// }

// const STORAGE_KEY = 'stays'

// _createStays()


// async function query(filterBy ={}) {
//     let stays = await storageService.query(STORAGE_KEY)
//     if (filterBy) {
//         stays = stays.filter(stay => stay.type.toLowerCase().includes(filterBy.type.toLowerCase()))
//     }
//     return stays
// }
// function getById(stayId) {
//     return storageService.get(STORAGE_KEY, stayId)
// }

// function remove(stayId) {
//     return storageService.remove(STORAGE_KEY, stayId)
// }

// async function save(stay) {
//     if (stay._id) {
//         return storageService.put(STORAGE_KEY, stay)
//     } else {
//         return storageService.post(STORAGE_KEY, stay)
//     }
// }

// function createStay(model = '', type = '', batteryStatus = 100) {
//     return {
//         model,
//         batteryStatus,
//         type
//     }
// }

// function getDefaultFilter() {
//     return ''
// }

// function getFilterFromParams(searchParams) {
//     const defaultFilter = getDefaultFilter()
//     const filterBy = {}
//     for (const field in defaultFilter) {
//         filterBy[field] = searchParams.get(field) || ''
//     }

//     return filterBy
// }

// function _createStays() {
//     let stays = utilService.loadFromStorage(STORAGE_KEY)
//     console.log("stays: ", stays)
//     if (!stays || !stays.length) {
//         stays = staysList
//         console.log("stays created: ", stays)
//         utilService.saveToStorage(STORAGE_KEY, stays)
//     }
// }
