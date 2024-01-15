import {stayService} from "../../services/stay.service"
import { ADD_STAY, SET_FILTER_BY, SET_STAY,UPDATE_STAY } from "../reducers/stay.reducer";
import { store } from "../store";

export async function loadStays(){
  try{
    const filterBy = store.getState().stayModule.filterBy
    console.log(filterBy);
    const stays = await stayService.query(filterBy)
    store.dispatch({ type: SET_STAY, stays })
    // const filterBy = store.getState().stayModule.filterBy
    // const stays = await stayService.query();
    // store.dispatch({ type: SET_STAY, stays })
  }
  catch (err) {
    console.log("Had issues loading stays", err);
    throw err
  }
}

export async function saveStay(stay) {
  try {
      const type = stay._id ? UPDATE_STAY : ADD_STAY
      const stayToSave = await stayService.save(stay)
      store.dispatch({ type, stay: stayToSave })
  } catch (err) {
      console.log('Had issues loading stays', err);
      throw err
  }
}

export function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy })
}

// export async function removeStay(stayId) {
//   try {
//       store.dispatch({ type: REMOVE_STAY, stayId })
//       await stayService.remove(stayId)
//   } catch (err) {
//       store.dispatch({ type: UNDO_CHANGES })
//       console.log('Had issues loading stays', err);
//       throw err
//   }
// }

// export async function saveStay(stay) {
//   try {
//       const type = stay.id ? UPDATE_STAY : ADD_STAY
//       const stayToSave = await stayService.save(stay)
//       store.dispatch({ type, stay: stayToSave })
//   } catch (err) {
//       console.log('Had issues loading stays', err);
//       throw err
//   }
// }

// export function setFilterBy(filterBy) {
//   store.dispatch({ type: SET_FILTER_BY, filterBy })
// }