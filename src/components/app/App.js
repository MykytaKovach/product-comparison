
import React from 'react';
import classes from './App.module.css';
import CardsHolder from '../cardsHolder/cardsHolder';


const app = (props) =>{
  return (
    <div className={classes.App}>
      <h1>Food Comparison</h1>
      <CardsHolder/>
    </div>
  );
};

export default app;
