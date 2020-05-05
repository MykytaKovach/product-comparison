import React ,{useState} from 'react';
import classes from './cardsHolder.module.css';
import Card from './card/card';


const CardsHolder = (props) =>{
     const [products,setProducts] = useState([{
        name:'Cherry',
        price:2,
        img:'img/cherry.jpg',
        description:'Read and Juicy',
        selected:false
    },{
        name:'Kiwi',
        price:1.5,
        img:'img/Kiwi.jpg',
        description:'Green and Sweet',
        selected:false
    },{
        name:'lemon',
        price:1,
        img:'img/lemons.jpg',
        description:'Yellow and sour',
        selected:false
    },{
        name:'Strawberry',
        price:3,
        img:'img/strawberry.jpg',
        description:'Read and Awesome',
        selected:false
    }])
    const pickProductHanlder=(name)=>{
        // selecting and removing poducts from the list
        const duplicatedList = [...products];
        for (let product in duplicatedList){
            // product is equal to 0,1,2,3
            if (duplicatedList[product].name === name){
                duplicatedList[product].selected = !duplicatedList[product].selected;
            }
        }
        setProducts(duplicatedList);

    }
    let cards = products.map(fruit=><Card 
    key={fruit.name}
    name={fruit.name}
    price={fruit.price}
    img={fruit.img}
    description={fruit.description}
    selected={fruit.selected}
    clicked={pickProductHanlder}/>)
    return(
        <div className={classes.CardsHolder}>
        
        {cards}
        </div>
    );
};

export default CardsHolder


