import React from 'react';
import classes from './card.module.css';

const card = (props) =>{

    return(
    <div className={classes.Card}>
        <div className={classes.Img} style={{background:`url(${props.img})`}}> 
            <p>button</p>
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