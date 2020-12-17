import React,{useState} from 'react'
import { RiAlarmWarningLine } from 'react-icons/ri'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [newTodos, setNewTodos] = useState([])
    const [status, setStatus] = useState(false)
    const [week, setWeek] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    
    
    
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

    // const filterBy = (e) => {
    //     e.preventDefault()
    //     const arr_copy =  todos
    //     // console.log(todos)
    //     // console.log(arr_copy, "copy")
    //     // let date = date.split('-')
    //     // console.log(date, "date")
    //     // for(let i = 0 ; i < todos.length ; i++){
            
    //     // }
    //     // console.log( todos.map(item => Number(item.date.split('-')[0])))
        
    //     // if(month == "Default"){
    //     //     setStatus(false)
    //     //     setNewTodos(arr_copy)
    //     // }
    //     // else{
            
    //     //     let monthFilter = arr_copy.filter(todo => todo.date.split('-')[1] == month)
    //     //     console.log(monthFilter)
    //     //     if(monthFilter.length == 0){
    //     //         setStatus(true)
    //     //     }
    //     //     else{
    //     //         setStatus(false)
    //     //     }
    //     //     setNewTodos(monthFilter)
            
    //     // }
    //     // if(year == "Default"){
    //     //     setStatus(false)
    //     //     setNewTodos(arr_copy)
    //     // }
    //     // else{
    //     //     let yearFilter = arr_copy.filter(todo => todo.date.split('-')[0] == year)
    //     //     console.log(yearFilter)
    //     //     if(yearFilter.length == 0){
    //     //         setStatus(true)
    //     //     }
    //     //     else{
    //     //         setStatus(false)
    //     //     }
    //     //     setNewTodos(yearFilter)
            
    //     // }
            

    // }

    const handleWeek = (e) => {
        setWeek(e.target.value)
        const arr_copy =  todos
        console.log(e.target.value, todos.map(todo => (new Date(todo.date).getDay())))
        if(e.target.value == "Default"){
            setStatus(false)
            setNewTodos(arr_copy)
        }
        else{
            // console.log(new Date(arr_copy[0].date).getDay())
            let dateFilter = arr_copy.filter(todo => (new Date(todo.date).getDay()) == e.target.value)
            console.log(dateFilter)
            if(dateFilter.length == 0){
                setStatus(true)
            }
            else{
                setStatus(false)
            }
            setNewTodos(dateFilter)
            
        }
    }


    const handleMonth = (e) => {
        setMonth(e.target.value)
        const arr_copy =  todos
        console.log(e.target.value, todos.map(todo => todo.date))
        if(e.target.value == "Default"){
            setStatus(false)
            setNewTodos(arr_copy)
        }
        else{
            let monthFilter = arr_copy.filter(todo => todo.date.split('-')[1] == e.target.value)
            console.log(monthFilter)
            if(monthFilter.length == 0){
                setStatus(true)
            }
            else{
                setStatus(false)
            }
            setNewTodos(monthFilter)
            
        }
    }


    const handleYear = (e) => {
        setYear(e.target.value)
        const arr_copy =  todos
        console.log(e.target.value, todos.map(todo => todo.date))
        if(e.target.value == "Default"){
            setStatus(false)
            setNewTodos(arr_copy)
        }
        else{
            let yearFilter = arr_copy.filter(todo => todo.date.split('-')[0] == e.target.value)
            console.log(yearFilter)
            if(yearFilter.length == 0){
                setStatus(true)
            }
            else{
                setStatus(false)
            }
            setNewTodos(yearFilter)
            
        }
    }

    return (
        <div>
            
            
            <div className="todo-app">
                <h1>Add Daily Notes</h1>
                <TodoForm onSubmit={addTodo} />
            </div>
            
            <div className="todo-app" style={{width:"90%", minHeight:"200px",height:"auto"}}>
                <div className="todo-header" style={{float: "left"}}>
                    <label className="label-header" for="sortby">Sort By:</label>

                    <select onChange={sortBy} name="sortby" id="sortby">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
                
                <div className="todo-header" style={{float: "right", marginBottom:"30px"}}>
                    <label className="label-header"  for="filterby">Filter By:</label>
                    
                    <label className="filter-header" for="filterbyweek">Week:</label>
                    <select onChange={handleWeek} name="week" id="filterbyweek">
                        <option value="Default">Default</option>
                        {
                            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((item, index) => ( <option value={index}>{item}</option>))
                        }
                    </select>

                    <label className="filter-header" for="filterbymonth">Month:</label>
                    <select onChange={handleMonth} name="Month" id="filterbymonth">
                        <option value="Default">Default</option>
                        {
                            ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((item, index) => ( <option value={index} >{item}</option>))
                        }
                    </select>
                    <label className="filter-header" for="filterbyyear">Year:</label>
                    <select onChange={handleYear} name="Year" id="filterbyyear">
                        {
                            ["Default", 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020].map(item => ( <option value={item} >{item}</option>))
                        }
                    </select>
                </div>
                {
                    status ? <p>No data is found</p> 
                    :
                
                    newTodos.length > 0 ? <Todo style={{cursor:"pointer"}}  todos={newTodos} completeTodo={completeTodo} removeTodo={removeTodo}  updatedTodo={updatedTodo} sortBy={sortBy} />
                    :
                    <Todo style={{cursor:"pointer"}}  todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}  updatedTodo={updatedTodo} sortBy={sortBy} />
                
                }
            </div>
        </div>
    )
}
