import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { stayReducer } from './reducers/stay.reducer'
import { orderReducer } from './reducers/order.reducer'
import { userReducer } from './reducers/user.reducer'

// import { userReducer } from './reducers/user.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    stayModule: stayReducer,
    orderModule: orderReducer,
    userModule: userReducer,
})

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store


