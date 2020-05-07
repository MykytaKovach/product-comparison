import * as actionTypes from './actionTypes';

export const addIngredient =(name)=>{
    return{
        type:actionTypes.ADD_PRODUCT,
        name
    }
}

export const rmvIngredient = (name)=>{
    return{
        type:actionTypes.RMV_PRODUCT,
        name
    }
}