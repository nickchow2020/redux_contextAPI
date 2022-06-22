import React from 'react'
import {connect} from "react-redux"
import {increment,decrement} from "../../redux/action"
class Counter extends React.Component {
    handleAlert =()=> {
        setTimeout(() => {
            alert(this.props.counter)
        }, 5000)
    }


    render() {
        console.log("it me",this.props)
        return <section>
            <header>CounterClass:{this.props.counter}</header>
            <button onClick={this.props.addCount}>+</button><button onClick={this.props.subCount}>-</button>
            <button onClick={this.handleAlert}>Alert after 5 s</button>
        </section>;
    }
}


const mapStateToProps = state => ({
    counter: state.counter.initCounter
});


const mapDispatchToProps = dispatch => {
    return {
        addCount: ()=> dispatch(increment()),
        subCount: ()=> dispatch(decrement())
    }
    
}




export default connect(mapStateToProps,mapDispatchToProps)(Counter)