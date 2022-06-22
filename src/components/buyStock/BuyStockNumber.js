import React from 'react';
import { withCounterContext } from '../../context/counterContext';

class StockNumber extends React.Component {
    render() {
        console.log("CounterNumber props", this.props)
        return <span>{this.props.counter}</span>
    }
}

const StockNumberContainer = withCounterContext(StockNumber)
export default StockNumberContainer