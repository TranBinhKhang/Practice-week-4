
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
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
    if (this.state.value1 == 'mrkhang' || this.state.value2 == '12345')
    {
      alert('Logged in successful');
    }
    else {
      alert('Nice try hacker')
    }
    event.preventDefault();
  }


  render() {

    return (
      <form onSubmit={this.result}>
        <p>Enter Username:</p>
        <input
          type='text'
          name='value1'
          value={this.state.value1}
          onChange={this.myChangeHandler}
        />
        <p>Enter Password:</p>
        <input
          type='text'
          name='value2'
          value={this.state.value2}
          onChange={this.myChangeHandler}
        />
        <p name="result">The delta is {this.state.value2 * this.state.value2 - 4 * this.state.value1 * this.state.value3}</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
