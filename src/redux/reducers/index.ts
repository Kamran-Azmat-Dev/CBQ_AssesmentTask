import {combineReducers} from 'redux';
import dataReducer from './data.reducer';


//insert another reducers here to be combined

const reducers = combineReducers({
  dataReducer,
});

export default reducers;

