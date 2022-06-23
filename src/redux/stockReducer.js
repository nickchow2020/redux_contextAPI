import {BUY_STOCK} from "./actionType"
import {SELL_STOCK} from "./actionType"
import { START_LOADING } from "./actionType"
import { END_LOADING } from "./actionType"
import { SET_STATE } from "./actionType"

const INIT_STATE = {
  stockAmount:0,
  incrementAmount:1,
  decrementAmount:1,
  isLoading: true
}

const stockReducer = (state=INIT_STATE,action)=>{
  switch (action.type){
    case BUY_STOCK:
      return {...state,stockAmount: state.stockAmount + state.incrementAmount}
    case SELL_STOCK:
      return {...state,stockAmount: state.stockAmount - state.decrementAmount}
    case START_LOADING:
      return {...state,isLoading:true}
    case END_LOADING:
      return {...state,isLoading:false}
    case SET_STATE:
      return {...state,...action.payload}
    default:
      return state
  }
}

export default stockReducer