import {combineReducers} from 'redux';
import sampleReducer from './samplereducer';
import locationReducer from './locationsReducer';
import jobReducer from './jobsReducer';

const rootReducer = combineReducers({sampleData: sampleReducer, locationsData: locationReducer, jobsData: jobReducer});
export default rootReducer;
