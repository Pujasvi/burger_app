import React, { Component } from 'react';
import Auxilliary from '../../hoc/auxilliary'
import classes from '../layout/layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        show:false,
    }

    closeBackdrop=()=>{
        this.setState({
            show:false
        })
    }
    openSideBar=()=>{
        this.setState((prevState,props)=>{
            return {
                show:!prevState.show
            }
        })   
    }
    render(){
      
        return (
            <Auxilliary >
            <Toolbar openSideBar={this.openSideBar}></Toolbar>
            <SideDrawer close={this.closeBackdrop} show={this.state.show}></SideDrawer>
             <main className={classes.layout}>
                {this.props.children}
            </main>
             </Auxilliary>
        )
    }
}

export default Layout;