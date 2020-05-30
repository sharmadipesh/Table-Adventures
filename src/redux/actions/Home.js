import {REDUX_SETUP,GET_SHIPMENT_INFORMATION} from 'redux/Types'
import {axiosNoAuth} from 'config/axios-instances';

export function reduxSetup(successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            await dispatch({
                type:REDUX_SETUP,
                payload:true
            })
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}

export function getShipmentInfo(successCallBack,errorCallBack){
    return async function(dispatch){
        try{
            let response = await axiosNoAuth.get(`http://localhost:3000/shipments`);

            console.log(response);
            await dispatch({
                type:GET_SHIPMENT_INFORMATION,
                payload:response.data
            })
        }catch(e){
            console.log(e);
            errorCallBack && errorCallBack(e);
        }
    }
}