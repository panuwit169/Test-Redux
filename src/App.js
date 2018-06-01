import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSalaryAction, reduceSalaryAction, addTodoAction, toggleTodoAction} from './actions'
import classNames from 'classnames'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: 0,
      reduceValue: 0,
      text: ''
    }

    this.handleChangeAddSalary = this.handleChangeAddSalary.bind(this)
    this.handleChangeReduceSalary = this.handleChangeReduceSalary.bind(this)
    this.handleChangeTextTodo = this.handleChangeTextTodo.bind(this)
  }

  handleChangeAddSalary(event){
    this.setState({addValue: parseInt(event.target.value, 10)})
  }

  handleChangeReduceSalary(event){
    this.setState({reduceValue: parseInt(event.target.value, 10)})
  }

  handleChangeTextTodo(event){
    this.setState({text: event.target.value})
  }

  addSalary(values){
    this.props.addSalaryDispatch(values)
    this.setState({addValue: 0})
  }

  reduceSalary(values){
    this.props.reduceSalaryDispatch(values)
    this.setState({reduceValue: 0})
  }

  addTodo(text){
    this.props.addTodoDispatch(text)
    this.setState({text: ''})
  }

  componentDidMount(){
    // console.log(this.props.todos)
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
          <button onClick={()=>this.reduceSalary(this.state.reduceValue)}>Reduce Salary</button><br />
        </p>
        <div>
          <ul>
            {this.props.todos.map(function(todo, index){
              var btnClass = classNames({
                'todoText': true,
                'active': todo.completed
              });
              return (
                <li className={btnClass}>
                  {todo.text}
                  <button onClick={()=>this.props.toggleTodoDispatch(todo.id)}>toggle button</button>
                </li>
              )
              },this)}
          </ul>
          <input type="text" onChange={this.handleChangeTextTodo} value={this.state.text}/>
          <button onClick={()=>this.addTodo(this.state.text)}>Add Todo</button><br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emp: state.emp,
    salary: state.salary,
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSalaryDispatch:(value) => {
      dispatch(addSalaryAction(value))
    },
    reduceSalaryDispatch:(value) => {
      dispatch(reduceSalaryAction(value))
    },
    addTodoDispatch:(text) => {
      dispatch(addTodoAction(text))
    },
    toggleTodoDispatch:(id) => {
      dispatch(toggleTodoAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);