import React,{ Component ,Fragment} from "react";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,
    meat:1,
    cheese:0.8
}
class BurgerBuilder extends Component{
    state={
        ingrediants:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        order:false,
        
    }
     ModalDisplay=null;
     

    addIngredientHandler=(type)=>{
        console.log("add ingredient hadnler");
        const oldcount= this.state.ingrediants[type];
        let newCount=oldcount+1;
        const updatedIngredients={
            ...this.state.ingrediants
        }
        updatedIngredients[type]=newCount;
        const priceadd=INGREDIENT_PRICES[type];
        const newprice=this.state.totalPrice+priceadd;
        
        this.setState({
            totalPrice:newprice,
            ingrediants:updatedIngredients,
            order:true,
        })
    }
    removeIngredientHandler=(type)=>{
        let count=this.state.ingrediants[type];
        console.log(count);
        if(count>0){
            let newCount=count-1;
            let price=this.state.totalPrice-INGREDIENT_PRICES[type];
            let newObject={
                ...this.state.ingrediants
            }
            newObject[type]=newCount;
            console.log(newCount);
            this.setState({
                totalPrice:price,
                ingrediants:newObject,
                order:newCount<=0?false:true
            })
        }
    }
    order=()=>{
       
        this.ModalDisplay=<h1>heelo</h1>//<Modal><OrderSummary ingrediants={this.state.ingrediants}></OrderSummary></Modal>
        console.log(this.ModalDisplay);
    }
    render (){
        console.log("this.test",this.ModalDisplay);
        let disabledInputs={
            ...this.state.ingrediants
        }
        for(let key in disabledInputs){
            disabledInputs[key]=disabledInputs[key]<=0;
        }
        
       return (
           <Fragment>
                <Modal show={this.state.order}><OrderSummary ingrediants={this.state.ingrediants}></OrderSummary></Modal>
               <Burger ingrediants={this.state.ingrediants}></Burger>
               <BuildControls price={this.state.totalPrice} order={this.order} add={this.addIngredientHandler} rem={this.removeIngredientHandler} disabled={disabledInputs}></BuildControls>
           </Fragment>
       )
    }

}
export default BurgerBuilder;