import * as actionTypes from './actionsTypes';

const INITIAL_STATE = {
    isLoading: false,
    jobs :[]
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.JOB_LOADING:
            return Object.assign({}, state, {isLoading: true});
        case actionTypes.JOB_LOAD_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                jobs: action.payload
            });
        case actionTypes.JOB_LOAD_FAIL:
            return Object.assign({}, state, {
                isLoading: false,
                jobs: [],
                loadError: action.payload
            });
        default:
            return state;
    }
};