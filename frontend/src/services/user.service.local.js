import PropTypes from 'prop-types'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { usersList } from './users.js'
// import {stayServiceList} from "./stayList.service.js"

export const userService = {
    query,
    save,
    remove,
    getByEmail,
    createUserStorage,
}

const STORAGE_KEY = 'users';

_createUsers();

async function query() {
    let users = await storageService.query(STORAGE_KEY);
    return users;
}

function getByEmail(email) {
    return storageService.getUser(STORAGE_KEY, email)
}

async function save(user) {
    // Ensure the email is properly passed and stored along with user data
    return storageService.postUser(STORAGE_KEY, user, user.email);
}

function remove(email) {
    return storageService.remove(STORAGE_KEY, email);
}

async function createUserStorage(user) {
    storageService.saveUserToStorage(STORAGE_KEY, user);
}


function _createUsers() {
    let users = utilService.loadFromStorage(STORAGE_KEY)
    if (!users || !users.length) {
        users = usersList
        utilService.saveUserToStorage(STORAGE_KEY, users)
    }
}