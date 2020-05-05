import React from 'react';
import classes from './after.module.css';

const after = (props) =>(
    <div className={classes.After} style={props.selected?{opacity:'.8'}:null}></div>
)

export default after;