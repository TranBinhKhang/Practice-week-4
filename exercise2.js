
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneysent: '',
      month: '',
      datesent: '',
      interest: '',
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
        <p>Enter money to send:</p>
        <input
          type='text'
          name='moneysent'
          value={this.state.value1}
          onChange={this.myChangeHandler}
        />
        <p>Enter term (month):</p>
        <input
          type='text'
          name='month'
          value={this.state.value2}
          onChange={this.myChangeHandler}
        />
        <p>Enter value 3:</p>
        <input
          type='datetime'
          name='datesent'
          value={this.state.value3}
          onChange={this.myChangeHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
