
import React from 'react';
import classes from './App.module.css';
import CardsHolder from '../cardsHolder/cardsHolder';
import Table from '../table/table'

const app = (props) =>{
  return (
    <div className={classes.App}>
      <h1>Food Comparison</h1>
      <CardsHolder/>
      <Table/>
    </div>
  );
};

export default app;
