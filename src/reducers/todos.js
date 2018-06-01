
const todos = (state = [], action) => {
    switch (action.type){
        case "addTodo" :
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false,
            }
        ]
        case "toggleTodo" :
            const index = state.map(item => item.id).indexOf(action.id);
            const stateTemp = [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
            return stateTemp;
        default:
            return state
    }
}

export default todos;

