const initialStateName = {
    name: "Panuwit",
    age: 23
}

const employeeReducer = (state = initialStateName, action) => {
    switch (action.type){
        case "setName" :
            state = {
                ...state,
                name: state.name = action.payload
            }
        break;
        case "setAge" :
        state = {
            ...state,
            age: state.age = action.payload,
        }
        break;
        default:
    }
    return state
}

export default employeeReducer;