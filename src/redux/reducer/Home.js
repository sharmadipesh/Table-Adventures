import {REDUX_SETUP} from 'redux/Types';

const initial_state={
    redux_setup:false
}

export default (state=initial_state,action)=>{
    switch(action.type){
        case REDUX_SETUP: return{
            ...state,
            redux_setup:action.payload
        };
        default:
			return state;
    }
}