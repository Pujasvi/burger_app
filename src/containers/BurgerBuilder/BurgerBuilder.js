import React,{ Component ,Fragment} from "react";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,
    meat:1,
    cheese:0.8
}
class BurgerBuilder extends Component{
    state={
        ingrediants:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:1,
        },
        totalPrice:4
    }


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
            ingrediants:updatedIngredients
        })
    }
    removeIngredientHandler=(type)=>{
        let count=this.state.ingrediants[type];
        if(count>0){
            let newCount=count-1;
            let price=this.state.totalPrice-INGREDIENT_PRICES[type];
            let newObject={
                ...this.state.ingrediants
            }
            newObject[type]=newCount;
            this.setState({
                totalPrice:price,
                ingrediants:newObject
            })
        }
    }
    render (){
        let disabledInputs={
            ...this.state.ingrediants
        }
        for(let key in disabledInputs){
            disabledInputs[key]=disabledInputs[key]<=0;
        }
        
       return (
           <Fragment>
               <Burger ingrediants={this.state.ingrediants}></Burger>
               <BuildControls add={this.addIngredientHandler} rem={this.removeIngredientHandler} disabled={disabledInputs}></BuildControls>
           </Fragment>
       )
    }

}
export default BurgerBuilder;