import React,{useState, useEffect, useRef} from 'react'
import {v4 as uuid} from 'uuid'

export default function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: uuid(),
            text: input
        })
        setInput('')
    }


    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <div>
                <input 
                type="text" 
                placeholder="add todo" 
                value={input} name="text" 
                className="todo-input" 
                onChange={handleChange}
                ref={inputRef}
                />
                <button type="submit" className="todo-button" >Add</button>
                <input 
                style={{float:"right"}}
                type="date" 
                />
                </div>
            </form>
        </div>
    )
}
