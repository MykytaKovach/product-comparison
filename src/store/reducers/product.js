import * as actionTypes from '../actions/actionTypes';

const initialState={
    products:[{
        name:'Cherry',
        selected:false,
        img:'img/cherry.jpg',
        properties:{
            price:"2$",
            description:'Red and Juicy',
            taste:"Sweet",
            colors:["#820A0E","#95B066"],
            state:"fresh"

        } 
    },{
        name:'Kiwi',  
        img:'img/Kiwi.jpg',
        selected:false,
        properties:{
            price:"1.5$",
            description:'Green and Sweet',
            taste:"Sweet and Sour",
            colors:["#DFE8CA","#85AF2A","#D3A25B"],
            state:"fresh"
        }
    },{
        name:'lemon',
        img:'img/lemons.jpg',
        selected:false,
        properties:{
            price:"1$",
            description:'Yellow and sour',
            taste:"Sour",
            colors:["#FAD126","#5D5E0F"],
            state:"fresh"

        }
        
    },{
        name:'Strawberry',

        img:'img/strawberry.jpg',
        selected:false,
        properties:{
            price:"3$",        
            description:'Red and Awesome',
            taste:"Sweet",
            colors:["#BE2435","#8E994A","#D4BF05"],
            state:"frozen"

        }
        
    }],
    productsToCompare:0
};

const addIngredient =(state,action)=>{
    const duplicatedState = {...state};
    const duplicatedList = [...state.products];
        for (let product in duplicatedList){
            // product is equal to 0,1,2,3
            if (duplicatedList[product].name === action.name){
                if(state.productsToCompare<3){
                    duplicatedList[product].selected = true;
                    duplicatedState.productsToCompare++
                }
            }
        }
        duplicatedState.products = duplicatedList;
        return duplicatedState;
    
};

const rmvIngredient =(state,action)=>{
    const duplicatedState = {...state};
    const duplicatedList = [...state.products];
        for (let product in duplicatedList){
            // product is equal to 0,1,2,3
            if (duplicatedList[product].name === action.name){
                    duplicatedList[product].selected = false;
                    duplicatedState.productsToCompare--
            }
        }
        duplicatedState.products = duplicatedList;
        return duplicatedState;
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_PRODUCT:return addIngredient(state,action);
        case actionTypes.RMV_PRODUCT:return rmvIngredient(state,action);
        default: return state;
    };
    
};

export default reducer;