import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <div onClick={props.openSideBar}>Menu</div>
        <Logo></Logo>
        <nav className={classes.DesktopOnly}>
            <NavigationItems  ></NavigationItems>
        </nav>
    </header>
)

export default Toolbar