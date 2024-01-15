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
    createStay,
    getDefaultFilter,
    getFilterFromParams,
    getStayShape
}

const STORAGE_KEY = 'stays'

_createStays()


async function query(filterBy ={}) {
    let stays = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        stays = stays.filter(stay => stay.type.toLowerCase().includes(filterBy.type.toLowerCase()))
    }
    return stays
}
function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

function remove(stayId) {
    return storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
    if (stay._id) {
        return storageService.put(STORAGE_KEY, stay)
    } else {
        return storageService.post(STORAGE_KEY, stay)
    }
}

function createStay(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        batteryStatus,
        type
    }
}

function getDefaultFilter() {
    return ''
}

function getFilterFromParams(searchParams) {
    const defaultFilter = getDefaultFilter()
    const filterBy = {}
    for (const field in defaultFilter) {
        filterBy[field] = searchParams.get(field) || ''
    }

    return filterBy
}

function getStayShape() {
    return PropTypes.shape({
        _id: PropTypes.string,
        model: PropTypes.string,
        type: PropTypes.string,
        batteryStatus: PropTypes.number,
    })
}

function _createStays() {
    let stays = utilService.loadFromStorage(STORAGE_KEY)
    console.log("stays: ", stays)
    if (!stays || !stays.length) {
        stays = staysList
        console.log("stays created: ", stays)
        utilService.saveToStorage(STORAGE_KEY, stays)
    }
}
