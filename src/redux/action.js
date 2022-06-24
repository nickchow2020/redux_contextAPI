import {HANDLE_ADD} from "./actionType"
import {HANDLE_SUB} from "./actionType"
import {HANDLE_OPTION} from "./actionType"


import {START_LOADING} from "./actionType"
import {END_LOADING} from "./actionType"
import {BUY_STOCK} from "./actionType"
import {SELL_STOCK} from "./actionType"
import { SET_STATE } from "./actionType"


import {getInitStockInfo} from "../apis/my_stock.api"


export const increment = ()=> {
  return {type:HANDLE_ADD}
}

export const decrement = ()=> {
  return {type:HANDLE_SUB}
}

export const reset = ()=> {
  return {type:HANDLE_OPTION}
}

export const buyStock = ()=>{
  return {type:BUY_STOCK}
}

export const sellStock = ()=>{
  return {type:SELL_STOCK}
}

export const startLoading = ()=>{
  return {type: START_LOADING}
}

export const endLoading = ()=>{
  return {type: END_LOADING}
}

export const setState = (payload)=>{
  return {type: SET_STATE, payload}
}

export function fetchDataFromAPI() {
  return async function thunk(dispatch) {
    dispatch(startLoading())
    let data = await getInitStockInfo()
    dispatch(setState(data))
    dispatch(endLoading())
  };
}
