let nextTodoId = 0

export const addSalaryAction = value =>({
    type: "add",
    payload: value
})

export const reduceSalaryAction = value =>({
    type: "del",
    payload: value
})

export const addTodoAction = value =>({
    type: "addTodo",
    id: nextTodoId++,
    text: value,
})

export const toggleTodoAction = id =>({
    type: "toggleTodo",
    id: id
})