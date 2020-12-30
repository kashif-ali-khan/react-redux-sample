const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        let val = 1;
        if (action.value) {
            val = 5;
        }
        return {
            ...state,
            counter: state.counter + val
        }
    }
    if (action.type === 'DECREMENT') {
        let val = 1;
        if (action.value) {
            val = 5;
        }
        return {
            ...state,
            counter: state.counter - val
        }
    }
    return state;
}

export default reducer;