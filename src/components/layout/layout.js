import React from 'react';
import Auxilliary from '../../hoc/auxilliary'
import classes from '../layout/layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

let Layout=(props)=>{

    return (
        <Auxilliary >
            <Toolbar></Toolbar>
            <SideDrawer></SideDrawer>
             <main className={classes.layout}>
                {props.children}
            </main>
        </Auxilliary>
       
    );

}
export default Layout;