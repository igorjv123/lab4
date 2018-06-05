import React, {Component} from 'react';
import ReactDom from 'react-dom';


class Input extends Component{
  constructor() {
    super();
    this.state = {task: <p></p>
    }
  }
  num1(){
    return (Number(this.refs.number1.value));
  }
  num2(){
    return (Number(this.refs.number2.value));
  }
  sumNum = () => {
    var sum = this.num1() + this.num2();
    this.setState({task: <p>{sum}</p>})
  }
  mnojNum = () => {
    var sum = this.num1() * this.num2();
    this.setState({task: <p>{sum}</p>})
  }
  minNum = () => {
    var sum = this.num1() - this.num2();
    this.setState({task: <p>{sum}</p>})
  }
  dilNum = () => {
    var sum = this.num1() / this.num2();
    this.setState({task: <p>{sum}</p>})
  }
    render(){
      return (<div>
        <input type="number" ref='number1'/><br/>
        <input type="number" ref='number2'/><br/>
        <button onClick={this.sumNum}>+</button>
        <button onClick={this.mnojNum}>*</button>
        <button onClick={this.minNum}>-</button>
        <button onClick={this.dilNum}>/</button>

        {this.state.task}
        </div>
      );
  }
}

ReactDom.render(
  <Input/>, document.getElementById('root')
)
