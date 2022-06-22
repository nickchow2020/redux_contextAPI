import React from 'react';
import {connect} from "react-redux"

class CounterNumber extends React.Component {
    render() {
        console.log("CounterNumber props", this.props)
        return <span>{this.props.counter}</span>
    }
}

const mapStateToProps = state => ({
    counter: state.counter.initCounter
});

export default connect(mapStateToProps)(CounterNumber)