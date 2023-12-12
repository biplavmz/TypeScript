// to create the class component we are using the rcce

import React, { Component } from 'react'

export default class LifeCycleMethod extends Component {
    constructor(){
        super();
        this.state = {
            count : 0 
        }

    }


    componentDidMount(){
        alert("componentDidMount: When Component Render First Time ")
    }

    componentDidUpdate(prevprops,prevState){
        if(prevprops.number !== this.props.number){
            alert("Component Update")
        }

    }

    increment(){
        this.setState({count: this.state.count + 1})
    }

    componentWillUnmount(){
        alert("if we are removing the component that time it will show component Unmount")
    }

    
  render() {
    let data = "useEffect(()=>{ this section work as ComponentDidMount  to remove use return callback Function return ()=>{console.log('Function Remove ')}  },[it work as ComponentDidUpdate ])"
    return (
        <>
        <div>LifeCycleMethod</div>
        <h1>In React.js, class components have lifecycle methods </h1>
        <ul>
            <li>That allow developers to execute code at specific points in the component's lifecycle.</li>
            <li>However, with the introduction of React Hooks in React 16.8, 
            functional components can also manage lifecycle aspects using the useEffect hook and other hooks.</li>
        </ul>

        <h2>There are three phases in React Life Cycle </h2>
        <h3>1. Mounting ,2.update, 3.Unmounting </h3>
        
        <h1>First Method is ComponentDidMount</h1>
        <h2>Second Method is ComponentDidUpdate</h2>
        <h2>Third Method is ComponentWillUnmount</h2>
        <h3>ComponentDidMount will run on the first time page load or rerender</h3>

        <h1>If you want to render something before DidMount then we have a constructor</h1>
        <h3>Before Page load if we want to initilize some veribale then we have to use constructor</h3>

        <ul>
            <li>Contructor,render have it's own lifecycle Method</li>
        </ul>

        <h1>With the help of Bible or trspiler </h1>


<h2>using Costructor count :- {this.state.count}</h2>
{/* <button onClick={()=>this.increment}>Increment</button> */}
<button onClick={this.increment.bind(this)}>Increment</button>

<h1>If we want to achive this lifeCycle method in functional Component then we have to use the useEffect hook</h1>

<h3>{data}
</h3>




        </>
    )
  }
}

