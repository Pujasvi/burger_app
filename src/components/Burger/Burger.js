import React from 'react'
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant'

const Burger=(props)=>{
    console.log(props.ingrediants);
   
    /**
     * one method
     */

    let transIngrediants=Object.keys(props.ingrediants)
    .map((key)=>{
        return [...Array(props.ingrediants[key])].map((_,index)=>{
             return <BurgerIngrediant key={key+index} type={key}></BurgerIngrediant>
        })
    });
    console.log(transIngrediants);

    //flatening the array
    let flattenedIngrediants=transIngrediants.reduce((curr,el)=>{
       
        return curr.concat(el);
    },[])
    if(flattenedIngrediants.length<1){
        flattenedIngrediants=<p>PLease select material to add</p>
    }
   
    /**
     *  1st method ends
     */

    /** 2nd Method */
    let keys=Object.keys(props.ingrediants);
    let transIngrediants2=[];
    keys.map((key,index)=>{
        if(props.ingrediants[key]>0){
            for(let i=0;i<props.ingrediants[key];i++)
            transIngrediants2.push(<BurgerIngrediant type={key} key={key+i}></BurgerIngrediant>);
        }
    })
    
    /** 2nd Method ends */
    

    return (
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"></BurgerIngrediant>
           {flattenedIngrediants}
            <BurgerIngrediant type="bread-bottom"></BurgerIngrediant>
        </div>
    );
}
export default Burger;