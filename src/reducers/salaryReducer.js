const initialState = {
    result: 25000,
    value: []
}

const salaryReducer = (state = initialState, action) => {
    switch (action.type){
        case "add" :
            state = {
                ...state,
                result: state.result += action.payload,
                value: [
                    ...state.value,
                    action.payload
                ]
            }
        break;
        case "del" :
        state = {
            ...state,
            result: state.result -= action.payload,
            value: [
                ...state.value,
                action.payload
            ]
        }
        break;
        default:
    }
    return state
}

export default salaryReducer;