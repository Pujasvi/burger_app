import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},

]

let arr=[];
controls.map((ctrl)=>
   arr.push(<BuildControl key={ctrl.label} label={ctrl.label}/>)
)

const BuildControls=(props)=>{

    return (
        <div className={classes.BuildControls}>
           {controls.map((ctrl)=>(
               <BuildControl key={ctrl.label}  added={()=>{props.add(ctrl.type)}} rem={()=>{props.rem(ctrl.type)}} disabled={props.disabled[ctrl.type]}/>
           )
            )}
        </div>
        
    )
}
export default BuildControls;