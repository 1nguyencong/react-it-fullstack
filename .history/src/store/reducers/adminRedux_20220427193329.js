import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('check start', action)
            return {
                ...state,
            }   

        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = {...state};
            copyState.gender = action.data;
            console.log('check success', copyState)
            return {
                ...copyState,
            } 

        case actionTypes.FETCH_GENDER_FAILED:
            console.log('check failed', action)
            return {
                ...state,
            }          
            
        default:
            return state;
    }
}

export default adminReducer;