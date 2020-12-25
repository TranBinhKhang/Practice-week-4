
import React from 'react';
import ReactDOM from 'react-dom';

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
    var delta = this.state.value2 * this.state.value2 - 4 * this.state.value1 * this.state.value3;
    if (delta < 0) {
      alert('this phuong trinh has no nghiem')
    }
    if (delta == 0) {
      alert('this phuong trinh has nghiem ' + (-this.state.value2 / 2 * this.state.value1))
    }
    if (delta > 0) {
      alert('this phuong trinh has nghiem ' + ((-this.state.value2 + Math.sqrt(delta)) / 2 * this.state.value1))
    }
    event.preventDefault();
  }


  render() {

    return (
      <form onSubmit={this.result}>
        <p>Enter value 1:</p>
        <input
          type='text'
          name='value1'
          value={this.state.value1}
          onChange={this.myChangeHandler}
        />
        <p>Enter value 2:</p>
        <input
          type='text'
          name='value2'
          value={this.state.value2}
          onChange={this.myChangeHandler}
        />
        <p>Enter value 3:</p>
        <input
          type='text'
          name='value3'
          value={this.state.value3}
          onChange={this.myChangeHandler}
        />
        <p name="result">The delta is {this.state.value2 * this.state.value2 - 4 * this.state.value1 * this.state.value3}</p>
        <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
