
import React from 'react';
import classes from './App.module.css';
import Card from '../card/card';


const app = (props) =>{
  return (
    <div className={classes.App}>
      <Card name="Cherry" price="2$" img={'/img/cherry.jpg'}/>
      <Card name="kiwi" price="2$" img={'/img/kiwi.jpg'}/>
      <Card name="lemons" price="2$" img={'/img/lemons.jpg'}/>
      <Card name="strawberry" price="2$" img={'/img/strawberry.jpg'}/>
    </div>
  );
};

export default app;
