import * as actionTypes from '../actions/actions';
const initialState = {

    results: []
}
const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({ id: new Date().getTime(), value: action.results })
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