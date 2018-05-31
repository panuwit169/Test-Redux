const initialState = {
    result: 25000,
    init: 0,
    value: []
}

const salaryReducer = (state = initialState, action) => {
    switch (action.type){
        case "add" :
            state = {
                ...state,
                result: state.result += action.payload,
                init: state.init,
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
            init: state.init,
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