import React from 'react';
import classes from './card.module.css';
import Button from '../../UI/button/button';
import After from '../../UI/After/after';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/product';
const card = (props) =>{

    const functionToPass= props.selected?props.onProductRemoved:props.onProductAdded;
    return(
    <div className={classes.Card}>
        <After selected={props.selected}/>
        <div className={classes.Img} style={{background:`url(${props.img})`}}> 
            <Button 
            selected={props.selected} 
            clicked={()=>functionToPass(props.name)}
            style ={props.selected?{transform:"scale(1)"}:null}/>
            </div>
        <div className={classes.Content}>
        <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        </div>
    <p><strong>{props.price}</strong></p>
    </div>
    </div>);
};

const mapDispatchToProps =dispatch=>{
    return{
        onProductAdded:(name)=>dispatch(actions.addIngredient(name)),
        onProductRemoved:(name) =>dispatch(actions.rmvIngredient(name))
    }
}
export default connect(null,mapDispatchToProps)(card);