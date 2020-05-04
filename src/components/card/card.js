import React from 'react';
import classes from './card.module.css';

const card = (props) =>{

    return(
    <div className={classes.Card}>
        <div className={classes.Img} style={{background:`url(${props.img})`}}> 
            <p>button</p>
            
        </div>
        <div className={classes.Content}></div>

    </div>);
};

export default card;