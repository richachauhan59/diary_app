import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todos, completeTodo, removeTodo, updatedTodo }) {
    const [edit, setEdit] = useState({
        id:null,
        value:""
    })

    const submitUpdate = (value) => {
        updatedTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className="card" style={{cursor:"pointer",width: "98%"}} className="todo-row" key={index} >
            <div className="card-header">
                <h6 className="todo-date">
                    {todo.date}
                </h6>

                <h6 className="icons">
                    <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                    />
                    <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon' 
                    />
                </h6>
            </div>
            <div className="card-body" key={todo.id} >
                {todo.text}
            </div>
            
        </div>
    ))
}

export default Todo
