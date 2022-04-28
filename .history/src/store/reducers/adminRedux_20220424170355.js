import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    roles: [],
    position: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GRNDER_START:
            console.log('check success', action)
            return {
                ...state,
            }   

        case actionTypes.FETCH_GRNDER_SUCCESS:
            let copyState = { ...state };
            copyState.gender = actionTypes.data;
            console.log('check success', copyState)
            return {
                ...copyState,
            } 

        case actionTypes.FETCH_GRNDER_FAILED:
            return {
                ...state,
            }          
            
        default:
            return state;
    }
}

export default adminReducer;