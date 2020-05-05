import React from 'react'
import classes from './Modal.module.css'

const Modal=(props)=>{
    let data;
    if(props.show){
        data=
            <div  className={classes.Modal}>
            {props.children}
        </div>
    }
    else{
        data=null;
    }
    console.log("modal rerender",data)
    return (
            data
    )
}

export default Modal;