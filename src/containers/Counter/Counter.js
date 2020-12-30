import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from "react-redux";

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementHandler} />
                <CounterControl label="Decrement" clicked={this.props.decrementHandler} />
                <CounterControl label="Add 5" clicked={this.props.add5Handler} />
                <CounterControl label="Subtract 5" clicked={this.props.sub5Handler} />
            </div>
        );
    }
}
const mapPropsToState = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementHandler: () => dispatch({ type: "INCREMENT" }),
        decrementHandler: () => dispatch({ type: "DECREMENT" }),
        add5Handler: () => dispatch({ type: "INCREMENT", value: 5 }),
        sub5Handler: () => dispatch({ type: "DECREMENT", value: 5 })
    }

}
export default connect(mapPropsToState, mapDispatchToProps)(Counter);