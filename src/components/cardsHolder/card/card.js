import React from 'react';
import classes from './card.module.css';
import Button from '../../UI/button/button';
import After from '../../UI/After/after'

const card = (props) =>{

    return(
    <div className={classes.Card}>
        <After selected={props.selected}/>
        <div className={classes.Img} style={{background:`url(${props.img})`}}> 
            <Button 
            selected={props.selected} 
            clicked={()=>props.clicked(props.name)}
            style ={props.selected?{transform:"scale(1)"}:null}/>
            </div>
        <div className={classes.Content}>
        <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        </div>
    <p><strong>{props.price} $</strong></p>
    </div>
    </div>);
};

export default card;