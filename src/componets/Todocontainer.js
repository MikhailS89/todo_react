import React, {useState, useEffect} from 'react'
import Todolist from './Todolist'
import {Context} from './context'
import axios from 'axios'

export default function Todocontainer (){

    const [todos, setTodos] = useState([])
    const [todoTitle, SetTodoTitle] = useState('')

    //axios GET
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('http://localhost:3000/db')
            console.log('res: ', res.data.db)
            setTodos(res.data.db)
        }
        getData()
    }, [setTodos])


    useEffect(()=>{
        console.log('init')
    }, [])


    //axios POST
    const addTodo = event => {
        if (event.key === "Enter" || event.type === "click"){
            const todo = {
                id: Date.now(),
                value: todoTitle,
                status: false
            }
            setTodos([
                ...todos, todo
            ])
            axios.post('http://localhost:3000/db', todo)
            SetTodoTitle('')
        }
        console.log(event)
    }

    //axios PUT
    const changeTodo = (id, value) => {
        setTodos(todos.map(item=> {
            if(item.id === id){
                item.value = value
            }
            return item
        }))
        
        console.log("id:", id , "value:" , value);
        console.log("todos", todos);
    }

    //axios DELETE
    const removeTodo = id => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }))
    }
    
        return (
            <Context.Provider value={{
                removeTodo, changeTodo
            }}>
            <div>
                <h1>To Do</h1>
                <div>
                    <input 
                        type="text" 
                        value={todoTitle}
                        onChange={event => SetTodoTitle(event.target.value)}
                        onKeyPress={addTodo}
                    ></input>
                        <button onClick={addTodo}>ADD</button>
                </div>
                <Todolist todos={todos}/>
            </div>
            </Context.Provider>
        )
    
}
