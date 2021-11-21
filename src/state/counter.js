// ACTION

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//REDUCER
export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};

//ACTION CREATORS
export const increment = (amount = 1) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount = 1) => ({ type: DECREMENT, payload: amount });
export const reset = () => ({ type: RESET });
