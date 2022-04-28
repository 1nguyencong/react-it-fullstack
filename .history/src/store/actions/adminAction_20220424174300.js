import { getAllCodeService } from "../../services/userService";
import actionTypes from './actionTypes';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GRNDER_START
// })

export const fetchGenderStart = () => {
    return (dispatch, getState) => {
        try {
            let res =  getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                console.log('check getState', getState)
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
    type: actionTypes.FETCH_GRNDER_SUCCESS,
    data1: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GRNDER_FAILED
})
