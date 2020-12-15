import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.test)){
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const updatedTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.test)){
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    // cursor: pointer;
    return (
        <div>
            <h1>Add daily Task</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo style={{cursor:"pointer"}} todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}  updatedTodo={updatedTodo} />
        </div>
    )
}
