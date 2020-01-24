<<<<<<< HEAD
import * as actionTypes from '../action/actionTypes'

const initialState={
	value:2
}
const reducer=(state=initialState,action)=>{
	return state;
}
export default reducer
=======
import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isAuth:false
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        isAuth:true
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        
        default:
            return state;
    }
};

export default reducer;
>>>>>>> b2575cda3de87f6b9cc49ad88b48a5693dda665b
