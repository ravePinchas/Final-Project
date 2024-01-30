import PropTypes from 'prop-types'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { staysList } from './stay-list.js'
// import {stayServiceList} from "./stayList.service.js"
  
export const stayService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'orders'

async function query() {
    let orders = await storageService.query(STORAGE_KEY)
    return orders
}
function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

function remove(orderId) {
    return storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    if (order._id) {
        return storageService.put(STORAGE_KEY, order)
    } else {
        return storageService.post(STORAGE_KEY, order)
    }
}

