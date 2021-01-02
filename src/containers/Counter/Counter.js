import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from "react-redux";

import { increment, decrement, storeResult, deleteResult } from '../store/actions/actions';
class Counter extends Component {
    // state = {
    //     counter: 0,
    //     results: []

    // }

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
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store result</button>
                <ul>
                    {
                        this.props.result.map(item => {
                            return <li onClick={() => this.props.deleteResult(item.id)} key={item.id}>{item.value}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
const mapPropsToState = state => {
    return {
        ctr: state.ctr.counter,
        result: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementHandler: () => dispatch(increment()),
        decrementHandler: () => dispatch(decrement()),
        add5Handler: () => dispatch(increment(5)),
        sub5Handler: () => dispatch(decrement(5)),
        storeResult: (results) => dispatch(storeResult(results)),
        deleteResult: (id) => dispatch(deleteResult(id))
    }

}
export default connect(mapPropsToState, mapDispatchToProps)(Counter);