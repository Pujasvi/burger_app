import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import BackDrop from '../Backdrop/Backdrop';

const Modal=(props)=>{
    let data;
    if(props.show){
        data=<Fragment>
                <BackDrop show={props.show}></BackDrop>
                <div  className={classes.Modal}>
                            {props.children}
                </div>
        </Fragment>
         
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