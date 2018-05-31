import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: 0,
      reduceValue: 0
    }

    this.handleChangeAddSalary = this.handleChangeAddSalary.bind(this)
    this.handleChangeReduceSalary = this.handleChangeReduceSalary.bind(this)
  }

  handleChangeAddSalary(event){
    this.setState({addValue: parseInt(event.target.value, 10)})
  }

  handleChangeReduceSalary(event){
    this.setState({reduceValue: parseInt(event.target.value, 10)})
  }

  addSalary(values){
    this.props.addSalaryDispatch(values)
    this.setState({addValue: 0})
  }

  reduceSalary(values){
    this.props.reduceSalaryDispatch(values)
    this.setState({reduceValue: 0})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          My Name is {this.props.emp.name} and Im {this.props.emp.age} years old
          i recive salary {this.props.salary.result} baht

          <input type="text" onChange={this.handleChangeAddSalary} value={this.state.addValue}/>
          <button onClick={()=>this.addSalary(this.state.addValue)}>Add Salary</button><br />

          <input type="text" onChange={this.handleChangeReduceSalary} value={this.state.reduceValue}/>
          <button onClick={()=>this.reduceSalary(this.state.reduceValue)}>Reduce Salary</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emp: state.emp,
    salary: state.salary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSalaryDispatch:(value) => {
      dispatch({
          type: "add",
          payload: value
      })
    },
    reduceSalaryDispatch:(value) => {
      dispatch({
          type: "del",
          payload: value
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);