import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary=(props)=>{

    let ingred=Object.keys(props.ingrediants).map((key)=>{
    return <li key={key}> <span style={{textTransform:'capitalize'}}>{key} </span>: {props.ingrediants[key]}</li>
    })

    return (
    <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>
            {ingred}
        </ul>
        <span> total price : {props.price}</span>
        <div>Continue to checkout?</div>
        <Button btnType="Danger" clicked={props.cancelOrder} >Cancel</Button>
        <Button  btnType="Success" clicked={props.continueOrder}>Continue</Button>
    </Fragment>
    )
}
export default OrderSummary;