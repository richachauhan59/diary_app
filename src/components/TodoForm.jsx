import React,{useState, useEffect, useRef} from 'react'
import {v4 as uuid} from 'uuid'

export default function TodoForm(props) {
    const [input, setInput] = useState('')
    var today = new Date();  
    const [date, setDate] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: uuid(),
            text: input,
            date: date
        })
        setInput('')
    }
    // today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' :: '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <div style={{margin:"30px"}}>
                    <input className="todo-input"
                    type="date" 
                    onChange={handleDate}
                    value={date}
                    />
                </div>
                <div>
                <textarea rows="4" cols="50"
                placeholder="Enter text here..." 
                value={input} name="text" 
                className="todo-input" 
                onChange={handleChange}
                ref={inputRef}
                />
                <button type="submit" className="todo-button" >Add</button>
                </div>
            </form>
        </div>
    )
}
