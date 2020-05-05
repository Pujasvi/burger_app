import React, { Fragment } from 'react';

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
        <div>Continue to checkout?</div>
    </Fragment>
    )
}
export default OrderSummary;