import { legacy_createStore as createStore } from "redux";
import { stayReducer } from "./reducers/stay.reducer";

export const store = createStore(stayReducer);