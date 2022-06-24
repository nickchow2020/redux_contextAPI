import React from 'react';
// import { withStockContext } from "../../context/stockContext";
import {connect} from "react-redux"
import {buyStock,sellStock,fetchDataFromAPI} from "../../redux/action";
class BuyStockClass extends React.Component {

  render(){
    console.log("is me !!!",this.props)
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
      if(this.props.stockAmount === 0)this.props.getData()
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
      getData: ()=> dispatch(fetchDataFromAPI())
  }
}


// const BuyStockClassContainer = withStockContext(BuyStockClass);


export default connect(mapStateToProps,mapDispatchToProps)(BuyStockClass);
