import React from 'react';
import {connect} from "react-redux"

class StockNumber extends React.Component {
    render() {
        return <span>{this.props.stockAmount}</span>
    }
}

const mapStateToProps = state => ({
    stockAmount: state.stock.stockAmount,
});

export default connect(mapStateToProps)(StockNumber)