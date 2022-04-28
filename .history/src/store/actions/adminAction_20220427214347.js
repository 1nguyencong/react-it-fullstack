import actionTypes from './actionTypes';
import { getAllCodeService } from "../../services/userService";



export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("GENDER");    
            console.log(res)
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error', e)
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data1: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})
