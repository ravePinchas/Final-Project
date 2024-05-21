import PropTypes from 'prop-types'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { staysList } from './stay-list.js'
import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
})

const BASE_URL = (process.env.NODE_ENV !== 'development') ? 
'api/stay' :
'//localhost:3030/api/stay/'

export const stayService = {
    query,
    save,
    remove,
    getById,
    getDefaultFilter,
    getFilterFromParams,
}

async function query(filterBy ={}) {
    // let stays = await storageService.query(STORAGE_KEY)
    var {data: stays} = await axios.get(BASE_URL, {params: filterBy})
    
    return stays
}

async function getById(stayId) {
     // return storageService.get(BASE_URL, stayId)
    const url = BASE_URL + stayId
    var {data: stay} = await axios.get(url)
    return stay
   
}

async function remove(stayId) {
    const url = BASE_URL + stayId
    var {data: res} = await axios.delete(url)
    return res
}

async function save(stay) {
    const method = stay._id ? 'put' : 'post'
    const { data: savedStay } = await axios[method](BASE_URL, stay)
    return savedStay
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

// function getStayShape() {
//     return PropTypes.shape({
//         _id: PropTypes.string,
//         model: PropTypes.string,
//         type: PropTypes.string,
//         batteryStatus: PropTypes.number,
//     })
// }

// function _createStays() {
//     let stays = utilService.loadFromStorage(STORAGE_KEY)
//     if (!stays || !stays.length) {
//         stays = staysList
//         console.log("stays created: ", stays)
//         utilService.saveToStorage(STORAGE_KEY, stays)
//     }
// }
