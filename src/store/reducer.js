import * as actionTypes from './actionTypes';

const initialState = {
    quoteArray: ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU'],
    author: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    quote: ''
};

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.GET_QUOTE:
            state.quote = state.quoteArray[((Math.random() * 10) % state.quoteArray.length)];
            return {
                ...state,
                quote: action.payload.quote
            };
        default:
            return 'NO QUOTE FOUND';
    }
}

export default reducer; 