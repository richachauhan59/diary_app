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

    const sortBy = (e) => {
        const arr_copy=[...todos]
        if(e.target.value === "oldest"){
            setTodos(arr_copy.reverse())
        }
        else if(e.target.value === "newest"){
            setTodos(arr_copy.reverse())
        }
    }

    const filterBy = (e) => {
        const arr_copy=[...todos]
        // if(e.target.value === "week"){
        //     setTodos(arr_copy.reverse())
        // }
        // else if(e.target.value === "month"){
        //     setTodos(arr_copy.reverse())
        // }
        // if(e.target.value === "year"){

            // setTodos(arr_copy.reverse())
        // }
        console.log(e.target.value)
       
        // console.log( todos.map(item => Number(item.date.split('-')[0])))
            let dateFilter = arr_copy.filter(todo => todo.date.split('-')[0] == e.target.value )
            setTodos(dateFilter)
        

    }

    return (
        <div>
            <h1>Add daily Task</h1>
            
            <TodoForm onSubmit={addTodo} />
            <div style={{background:"white", width:"49%", float: "right"}}>
                <label for="sortby">Sort By:</label>

                <select onChange={sortBy} name="sortby" id="sortby">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>
            
            <div style={{background:"white", width:"49%", float: "left"}}>
                <label for="filterby">Filter By:</label>

                <label for="filterby">Week:</label>
                <select onChange={filterBy} name="week" id="filterby">
                    {
                        ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(item => ( <option value={item}>{item}</option>))
                    }
                </select>

                <label for="filterby">Month:</label>
                <select onChange={filterBy} name="Month" id="filterby">
                    {
                        ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(item => ( <option value={item} >{item}</option>))
                    }
                </select>

                <label for="filterby">Year:</label>
                <select onChange={filterBy} name="Year" id="filterby">
                    {
                        [2014, 2015, 2016, 2017, 2018, 2019, 2020].map(item => ( <option value={item} >{item}</option>))
                    }
                </select>
            </div>
            <Todo style={{cursor:"pointer"}} todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}  updatedTodo={updatedTodo} sortBy={sortBy} />
            
        </div>
    )
}
