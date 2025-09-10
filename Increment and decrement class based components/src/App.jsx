import React, { Component } from 'react';
import './App.css'
 class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
      <div className='container'>
        <h1>Count: {this.state.count}</h1>
        <button className = "btn increment" onClick={this.increment}>increment</button>
        <button  className="btn decrement" onClick={this.decrement}>decrement</button>
       </div>
    </>
    
    
   
)
}
 }
 export default App
