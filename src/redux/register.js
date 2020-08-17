import * as ActionTypes from './ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Register = (state = {
        isLoading: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {...state,
                isLoading: true
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: ''
            };
        case ActionTypes.SIGNUP_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        
        default:
            return state
    }
}