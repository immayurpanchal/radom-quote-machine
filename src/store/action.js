import * as actionTypes from "./actionTypes";

const setQuote = (quote) => {
  return {
    type: actionTypes.GET_QUOTE,
    payload: { quote }
  };
};

export default setQuote;