import React from 'react';
// import { withStockContext } from "../../context/stockContext";
import {connect} from "react-redux"
import {buyStock,sellStock,startLoading,endLoading,setState} from "../../redux/action";
import {getInitStockInfo} from "../../apis/my_stock.api"
class BuyStockClass extends React.Component {

  render(){
    console.log("is me",this.props)
    return (
      <section>
        <h1>How many stock you want to buy</h1>
        {
          this.props.isLoading 
          ? <h1>spinner...</h1>
          :<><button onClick={this.props.buyStock}>
              +
          </button>
          <span style={{ color: 'blue',padding: 20 }}>{this.props.stockAmount}</span>
          <button onClick={this.props.sellStock}>
              -
          </button>
          <span style={{ color: 'blue',padding: 20 }}>BuyStockClass</span></>
        }

      </section>
    )
    }

    componentDidMount(){
      if(this.props.stockAmount === 0){
        this.props.startLoading()
        getInitStockInfo()
        .then(option => {
          this.props.setState(option)
          this.props.endLoading()
        })
      }
    }
}


const mapStateToProps = state => ({
  stockAmount: state.stock.stockAmount,
  isLoading: state.stock.isLoading
});


const mapDispatchToProps = dispatch => {
  return {
      buyStock: ()=> dispatch(buyStock()),
      sellStock: ()=> dispatch(sellStock()),
      startLoading :()=> dispatch(startLoading()),
      endLoading :()=> dispatch(endLoading()),
      setState :(option)=> dispatch(setState(option)),
  }
}


// const BuyStockClassContainer = withStockContext(BuyStockClass);


export default connect(mapStateToProps,mapDispatchToProps)(BuyStockClass);
