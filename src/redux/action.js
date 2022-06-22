import {HANDLE_ADD} from "./actionType"
import {HANDLE_SUB} from "./actionType"
import {HANDLE_OPTION} from "./actionType"



export const increment = ()=> {
  return {type:HANDLE_ADD}
}

export const decrement = ()=> {
  return {type:HANDLE_SUB}
}

export const reset = ()=> {
  return {type:HANDLE_OPTION}
}