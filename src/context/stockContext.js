import React, {useContext,useEffect} from "react"
import {useCounter} from "../hooks/useCounter";
import {useLoading} from "../hooks/useLoading";
import {getInitStockInfo} from "../apis/stock.api";

const StockContext = React.createContext(null)

export const withStockContext = (WrappedComponent) => {
  return class NewComponent extends React.Component {
      static contextType = StockContext;
      render() {
          const [stockAmount,buyStock,sellStock,isLoading,startLoading,endLoading,showLoading] =this.context;
          return <WrappedComponent 
          {...this.props} 
          stockAmount={stockAmount}
          buyStock={buyStock}
          sellStock={sellStock}
          isLoading={isLoading}
          startLoading={startLoading}
          endLoading={endLoading}
          showLoading={showLoading}
          />
      }
  }
}

export const useStockContext = ()=> {
  return useContext(StockContext)
}

export const StockContextProvider = (props) => {
  
  const [stockAmount,buyStock,sellStock,setStockOption] = useCounter()
  const [isLoading,startLoading,endLoading,showLoading] = useLoading()

  useEffect(() => {
    startLoading()
    getInitStockInfo().then(option => {
        setStockOption(option);
        endLoading()
    })
}, [])

  return (
    <StockContext.Provider value={[
      stockAmount,
      buyStock,
      sellStock,
      isLoading,
      startLoading,
      endLoading,
      showLoading
    ]}>
      {props.children}
    </StockContext.Provider>
  )
}


