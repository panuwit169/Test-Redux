import employeeReducer from './employeeReducer'
import salaryReducer from './salaryReducer'
import todos from './todos'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    emp: employeeReducer, 
    salary: salaryReducer,
    todos: todos
})

export default rootReducers;