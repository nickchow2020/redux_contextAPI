import React from 'react';
import {useSelector,useDispatch} from "react-redux"

const CounterFn = () => {

  const {initCounter} = useSelector(data => data.counter)

  console.log(initCounter)

  const dispatch = useDispatch()

  const counterRef = React.useRef(initCounter)
  counterRef.current = initCounter;
  
  const handleAlert =()=>{
    setTimeout(()=>{
      alert(counterRef.current)
    },5000)
  }

  const handleAdd = ()=> {
    dispatch({type:"HANDLE_ADD"})
  }

  const handleSub = ()=>{
    dispatch({type:"HANDLE_SUB"})
  }

    return (
      <>
        <section>
          <header>CounterFu:{initCounter}</header>
          <button onClick={handleAdd} >+</button><button onClick={handleSub}>-</button>
          <button onClick={handleAlert}>Alert after 5 s</button>
        </section>
      </>
    )
}

export default CounterFn;

