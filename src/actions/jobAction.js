import * as actionTypes from '../reducers/actionsTypes';
import axios from 'axios';
export function loadJobDetails(selectedLocation) {
    return function (dispatch) {
        let url = window.location.origin + '/api/opportunities?location=' + selectedLocation
        dispatch({type: actionTypes.JOB_LOADING});
        axios.get(url).then((responseData) => {
                dispatch({type: actionTypes.JOB_LOAD_SUCCESS, payload: responseData.data});
            }).catch((responseData) => {
                dispatch({type: actionTypes.JOB_LOAD_FAIL, payload: responseData});
            });
    }
}