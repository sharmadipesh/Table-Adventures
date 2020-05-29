import React from 'react';
import {REDUX_SETUP} from 'redux/Types'

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