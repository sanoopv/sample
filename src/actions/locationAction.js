import * as actionTypes from '../reducers/actionsTypes';
import axios from 'axios';
export function loadLocations() {
    return function (dispatch) {
        let url = window.location.origin + '/api/locations'
        dispatch({type: actionTypes.LOCATION_LOADING});
        axios.get(url).then((responseData) => {
                dispatch({type: actionTypes.LOCATION_LOAD_SUCCESS, payload: responseData.data});
            }).catch((responseData) => {
                dispatch({type: actionTypes.LOCATION_LOAD_FAIL, payload: responseData});
            });
    }
}