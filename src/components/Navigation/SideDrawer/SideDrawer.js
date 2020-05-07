import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';

const SideDrawer=(props)=>{

    let attachClass=[classes.SideDrawer,classes.Close];
    if(props.show){
        attachClass=[classes.SideDrawer,classes.Open];
    }
    console.log(attachClass);
    return (
        <Fragment>
            <BackDrop show={props.show} clicked={props.close}></BackDrop>
            <div className={attachClass.join(' ')}>
                <div style={{height:'11%'}}>
                <Logo></Logo>
                </div>
               
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>   
        </Fragment>
         
    )
}

export default SideDrawer;