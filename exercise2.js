import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.result = this.result.bind(this);
  }
  myChangeHandler(event) {
    const name = event.target.name;
    const val = event.target.value;
    const newState = {};
    newState[name] = val;
    this.setState(newState);
  }

  result(event) {
    var profit = this.state.value1*this.state.value2*(this.state.value3/12);
    alert('The profit money is ' + profit);
    event.preventDefault();
  }


  render() {

    return (
      <form onSubmit={this.result}>
        <p>Enter money:</p>
        <input
          type='text'
          name='value1'
          value={this.state.value1}
          onChange={this.myChangeHandler}
        />
        <p>Enter month:</p>
        <input
          type='text'
          name='value2'
          value={this.state.value2}
          onChange={this.myChangeHandler}
        />
        <p>Enter interest rate (yearly):</p>
        <input
          type='text'
          name='value3'
          value={this.state.value3}
          onChange={this.myChangeHandler}
        />
<br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
