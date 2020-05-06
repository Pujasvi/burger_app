import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer=(props)=>{
    return (
            <div className={classes.SideDrawer}>
                <div style={{height:'11%'}}>
                <Logo></Logo>
                </div>
               
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
    )
}

export default SideDrawer;