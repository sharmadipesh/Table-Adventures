import {REDUX_SETUP,GET_SHIPMENT_INFORMATION} from 'redux/Types';

const initial_state={
    redux_setup:false,
    shipInformationData:null
}

export default (state=initial_state,action)=>{
    switch(action.type){
        case REDUX_SETUP: return{
            ...state,
            redux_setup:action.payload
        };
        case GET_SHIPMENT_INFORMATION: return{
            ...state,
            shipInformationData:action.payload
        };
        default:
			return state;
    }
}