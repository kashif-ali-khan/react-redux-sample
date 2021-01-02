export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value
    }
}

export const decrement = (value) => {
    return {
        type: DECREMENT,
        value: value
    }
}





export const saveResult = (results) => {
    return {
        type: STORE_RESULT,
        results: results
    }
}
export const storeResult = (results) => {
    return (dispatch,getState) => {
        setTimeout(() => {
            console.log('[Couonter]',getState().ctr.counter)
            dispatch(saveResult(results))
        }, 3000)
    }
}

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id: id
    }
}