const INITIAL_STATE = {};

const sampleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAMPLE':
            return {message: 'Hello from redux'};
        default:
            return state;
    }
};

export default sampleReducer;