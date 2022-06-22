import React, {useEffect} from 'react'
import { useCounterContext } from '../../context/counterContext';
import { useLoading } from '../../hooks/useLoading'
import { getInitStockInfo } from '../../apis/stock.api'


const BuyStockFn = () => {
  const [isLoading, startLoading, endLoading, showLoading] = useLoading(false)

  const [
    stockAmount,
    buyStock,
    sellStock,
    setStockOption
] = useCounterContext()

  useEffect(() => {
    startLoading()
    getInitStockInfo().then(option => {
        setStockOption(option);
        endLoading()
    })
}, [])

  return(
    <section>
      <h1>How many stock you want to buy</h1>
      {
        isLoading 
        ? showLoading('normal') 
        :<><button onClick={buyStock}>+</button>
      <span style={{ color: 'blue',padding: 20 }}>{stockAmount}</span>
      <button onClick={sellStock}>-</button>
      <span style={{ color: 'blue',padding: 20 }}>BuyStockFun</span></>
      }

    </section>
  )
}

export default BuyStockFn;