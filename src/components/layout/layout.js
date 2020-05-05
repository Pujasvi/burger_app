import React from 'react';
import Auxilliary from '../../hoc/auxilliary'
import classes from '../layout/layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

let Layout=(props)=>{

    return (
        <Auxilliary >
            
            <Toolbar></Toolbar>
             <main className={classes.layout}>
                {props.children}
            </main>
        </Auxilliary>
       
    );

}
export default Layout;