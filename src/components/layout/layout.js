import React from 'react';
import Auxilliary from '../../hoc/auxilliary'
import classes from '../layout/layout.module.css'

let Layout=(props)=>{

    return (
        <Auxilliary >
            <div >toolbar,navbar,sidebar</div>
             <main className={classes.layout}>
                {props.children}
            </main>
        </Auxilliary>
       
    );

}
export default Layout;