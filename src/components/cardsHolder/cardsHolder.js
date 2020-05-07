import React  from 'react';
import classes from './cardsHolder.module.css';
import Card from './card/card';
import {connect} from 'react-redux';

const CardsHolder = (props) =>{
    let cards = props.productsList.map(fruit=><Card 
    key={fruit.name}
    name={fruit.name}
    price={fruit.properties.price}
    img={fruit.img}
    description={fruit.properties.description}
    selected={fruit.selected}/>)
    return(
        <div className={classes.CardsHolder}>
        {cards}
        </div>
    );
};

const mapStateToProps =state=>{
    return{
        productsList: state.products
    }
}


export default connect(mapStateToProps)(CardsHolder);


