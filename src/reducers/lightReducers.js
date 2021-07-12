import { connect } from "react-redux";
import { 
    incrementAction, 
    decrementAction, 
    incrementBy10Action, 
    decrementBy10Action, 
    resetAction } from "../actions/counter.actions"

let initialState = 0

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
        case 'INCREMENT-BY-10':
            return state + 10;
        case 'DECREMENT-BY-10':
            return state - 10;
        case 'RESET':
                state = 0
                return state;        
		default:
			return state;
  }
}
