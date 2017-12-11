import * as actionTypes from './actionsTypes';

const INITIAL_STATE = {
    isLoading: false,
    locations: []
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOCATION_LOADING:
            return Object.assign({}, state, {isLoading: true});
        case actionTypes.LOCATION_LOAD_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                locations: action.payload
            });
        case actionTypes.LOCATION_LOAD_FAIL:
            return Object.assign({}, state, {
                isLoading: false,
                locations: [],
                loadError: action.payload
            });
        default:
            return state;
    }
};