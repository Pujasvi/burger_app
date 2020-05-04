import React from 'react'
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant'

const Burger=(props)=>{
    console.log(props.ingrediants);
   
    const transIngrediants=Object.keys(props.ingrediants)
    .map((key)=>{
        return [...Array(props.ingrediants[key])].map((_,index)=>{
             return <BurgerIngrediant key={key+index} type={key}></BurgerIngrediant>
        })
    });
    console.log(transIngrediants);
    return (
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"></BurgerIngrediant>
           {transIngrediants}
            <BurgerIngrediant type="bread-bottom"></BurgerIngrediant>
        </div>
    );
}
export default Burger;