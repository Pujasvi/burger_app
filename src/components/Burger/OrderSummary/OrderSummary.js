import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component{

    
    componentDidUpdate(){
        console.log("component updated")
    }
    render(){
        let ingred=Object.keys(this.props.ingrediants).map((key)=>{
            return <li key={key}> <span style={{textTransform:'capitalize'}}>{key} </span>: {this.props.ingrediants[key]}</li>
            })

        return (
            <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingred}
            </ul>
            <span> total price : {this.props.price}</span>
            <div>Continue to checkout?</div>
            <Button btnType="Danger" clicked={this.props.cancelOrder} >Cancel</Button>
            <Button  btnType="Success" clicked={this.props.continueOrder}>Continue</Button>
        </Fragment>
        )
    }

}

export default OrderSummary;