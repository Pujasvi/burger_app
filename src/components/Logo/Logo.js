import React from 'react'
import burgerLogo from '../../assets/Images/original.png';
import classes from './Logo.module.css'
const Logo=()=>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="burger"/>
    </div>
)

export default Logo;