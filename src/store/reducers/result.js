import * as actionTypes from '../actions';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), val: action.result }),
            }
        case actionTypes.DELETE_RESULT:

            const newArray = state.results.filter(result => result.id !== action.resultElId);

            return {
                ...state,
                results: newArray
            }
    }
    return state;
};

export default reducer;