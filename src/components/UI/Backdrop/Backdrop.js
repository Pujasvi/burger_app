import React from 'react'
import classes from './Backdrop.module.css'

const BackDrop=(props)=>   {
    console.log("backdrop rerendered");
    return(
        props.show?<div className={classes.Backdrop}></div>:null
    )
}


export default BackDrop;