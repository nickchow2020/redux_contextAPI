import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {buyStock,sellStock} from "../../redux/action";
import {fetchDataFromAPI} from "../../redux/action";
const BuyStockFn = () => {
  const {stockAmount,isLoading} = useSelector(data => data.stock)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(stockAmount === 0) dispatch(fetchDataFromAPI())
  },[dispatch])

  return(
    <section>
      <h1>How many stock you want to buy</h1>
      {
        isLoading 
        ? <h1>loading...</h1>
        :<><button onClick={()=> dispatch(buyStock())}>+</button>
      <span style={{ color: 'blue',padding: 20 }}>{stockAmount}</span>
      <button onClick={()=> dispatch(sellStock())}>-</button>
      <span style={{ color: 'blue',padding: 20 }}>BuyStockFun</span></>
      }
    </section>
  )
}

export default BuyStockFn;