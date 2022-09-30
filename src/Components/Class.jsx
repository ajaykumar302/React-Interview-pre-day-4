import React, { Component } from 'react'
import LifeCycleMethods from './Lifecycle';

export class Class extends Component {
    constructor(){
        super();
        this.state={
          removeComponent: false
        }
      }
      render(){
        return(
          <div>
          {!this.state.removeComponent && <LifeCycleMethods /> } 
          <h1><button className="btn btn-danger" onClick={() => this.setState({removeComponent: !this.state.removeComponent})}>Remove</button>
         </h1>
           </div>
        )
      }
    

    }
    


export default Class