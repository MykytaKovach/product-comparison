import React from 'react';
import classes from './table.module.css';
import {connect} from 'react-redux';
import Color from '../UI/color/color';
const table = (props) =>{
    
    const selectedProducts=props.products.filter(product=>product.selected);
    const propertyList= [];
    let table = null;
    if(props.productsToCompare>1){
        for (let key in selectedProducts[0].properties){
            propertyList.push(key)
        }
        console.log(propertyList)
        table = 
        <table className={classes.Table}>
            <thead>
                <tr>
                <td></td>
    {selectedProducts.map(product=><th key ={product.name}>{product.name}</th>)}
         </tr>
        </thead>
        <tbody>
        {propertyList.map(property=>(
            <tr key={property}>
                
                <td>{property}</td>
                {selectedProducts.map(product=>(
                <td key ={product.name}>
                    {property==="colors"?
                    <Color colors={product.properties[property]}/>:
                    product.properties[property]}
                    </td>))}
            </tr>
        ))}
        </tbody>
           
        </table>
    }
    
    return(
        <React.Fragment>
            {table}
        </React.Fragment>
        
    );
};

const mapStateToProps=state=>{
    return{
        products:state.products,
        productsToCompare:state.productsToCompare
    }
}
export default connect(mapStateToProps)(table);