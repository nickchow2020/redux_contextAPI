import { combineReducers } from "redux";
import counter from "./counterReducer";
import stock from "./stockReducer"

const rootReducer = combineReducers({
    counter,
    stock
})

export default rootReducer