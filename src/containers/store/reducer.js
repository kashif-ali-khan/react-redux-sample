import * as actionTypes from './../store/actions';
const initialState = {
    counter: 0,
    results: []
}
const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        let val = 1;
        if (action.value) {
            val = 5;
        }
        return {
            ...state,
            counter: state.counter + val
        }
    }
    if (action.type === actionTypes.DECREMENT) {
        let val = 1;
        if (action.value) {
            val = 5;
        }
        return {
            ...state,
            counter: state.counter - val
        }
    }
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({ id: new Date().getTime(), value: state.counter })
        }
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        console.log(action.id);
        return {
            ...state,
            results: state.results.filter(item => item.id !== action.id)
        }
    }
    return state;
}

export default reducer;