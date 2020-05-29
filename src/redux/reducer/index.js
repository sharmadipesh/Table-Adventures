import { combineReducers } from 'redux';
import Home from 'redux/reducer/Home';

const appReducer = combineReducers({
    Home
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
