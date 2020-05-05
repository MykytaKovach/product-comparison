import React from 'react';
import classes from './button.module.css';

const button = (props) =>(
    <p onClick={props.clicked} className={classes.Button} style={props.style}>{!props.selected?"select":"remove"}</p>
)

export default button