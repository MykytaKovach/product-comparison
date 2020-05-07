import React from 'react';
import classes from './color.module.css';

const color = (props) =>{
    const colors = props.colors.map(color=>(
        <div
        style={{background:color}}></div>
    ));
 return <div className={classes.Color}>{colors}</div>;
};


export default color;