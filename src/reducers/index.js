import employeeReducer from './employeeReducer'
import salaryReducer from './salaryReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    emp: employeeReducer, 
    salary: salaryReducer
})

export default rootReducers;