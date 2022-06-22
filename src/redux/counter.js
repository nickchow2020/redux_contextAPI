const INIT_STATE = {
  initCounter: 0,
  incrementNum: 1,
  decrementNum: 1
}

function counterReducer(state=INIT_STATE,action){
  switch(action.type){
    case "HANDLE_ADD" :
      return {...state,initCounter: state.initCounter + state.incrementNum}

    case "HANDLE_SUB" :
      return {...state,initCounter: state.initCounter - state.decrementNum}

    case "HANDLE_OPTION":
      return {...state,...action.newOption}

    default:
      return state
  }
}

export default counterReducer