import React from 'react';
import classes from './cardsHolder.module.css';
import Card from './card/card';
const fruits =[{
    name:'Cherry',
    price:2,
    img:'img/cherry.jpg',
    description:'Read and Juicy'
},{
    name:'Kiwi',
    price:1.5,
    img:'img/Kiwi.jpg',
    description:'Green and Sweet'
},{
    name:'lemon',
    price:1,
    img:'img/lemons.jpg',
    description:'Yellow and sour'
},{
    name:'Strawberry',
    price:3,
    img:'img/strawberry.jpg',
    description:'Read and Awesome'
}];

const cardsholder = (props) =>{

    let cards = fruits.map(fruit=><Card 
    name={fruit.name}
    price={fruit.price}
    img={fruit.img}
    description={fruit.description}/>)
    return(
        <div className={classes.CardsHolder}>
        
        {cards}
        </div>
    );
};

export default cardsholder


