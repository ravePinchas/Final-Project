import PropTypes from 'prop-types'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { usersList } from './users.js'
import { Axios } from 'axios'
// import {stayServiceList} from "./stayList.service.js"



var axios = Axios.create({
    withCredentials: true,
})

const BASE_URL = (process.env.NODE_ENV !== 'development') ? 
'api/user' :
'//localhost:3030/api/user/'

export const userService = {
    query,
    save,
    remove,
    getByEmail,
}

async function query() {

    var {data: users} = await axios.get(BASE_URL)
    // let users = await storageService.query(STORAGE_KEY);
    return users;
}

async function getByEmail(email) {
    const url = BASE_URL + email
    var {data: user} = await axios.get(url)
    return user
    // return storageService.getUser(STORAGE_KEY, email)
}

async function save(user) {
    const method = user.email ? 'put' : 'post'
    const { data: savedUser } = await axios[method](BASE_URL, user)
    return savedUser
    // return storageService.postUser(STORAGE_KEY, user, user.email);
}

async function remove(email) {
    const url = BASE_URL + email
    var {data: res} = await axios.delete(url)
    return res
}

// async function createUserStorage(user) {
//     storageService.saveUserToStorage(STORAGE_KEY, user);
// }


// function _createUsers() {
//     let users = utilService.loadFromStorage(STORAGE_KEY)
//     if (!users || !users.length) {
//         users = usersList
//         utilService.saveUserToStorage(STORAGE_KEY, users)
//     }
// }