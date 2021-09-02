import React, {useState, useEffect} from 'react'
import Todolist from './Todolist'
import {Context} from './context'
import axios from 'axios'
import './Todocontainer.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Todocontainer (){

    const [todos, setTodos] = useState([])
    const [todoTitle, SetTodoTitle] = useState('')

    //axios GET
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('http://localhost:3000/db')
            // console.log('res: ', res.data.db)
            setTodos(res.data.db)
        }
        getData()
    }, [setTodos])


    // useEffect(()=>{
    //     console.log('init')
    // }, [])


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
        // console.log(event)
    }

    //axios PUT input
    const changeTodo = (id, value) => {
        setTodos(todos.map(item=> {
            if(item.id === id){
                item.value = value
            }
            return item
        }))
        const todo = todos.find(item => item.id === id )
        axios.put(`http://localhost:3000/db/${id}`, todo)

        // console.log("id:", id , "value:" , value);
        // console.log("todos", todos);
    }

    //axios PUT checked
    const changeChecked = (id, status) => {
        // console.log(id, status)
        setTodos(todos.map(item=>{
            if(item.id ===id){
                item.status = status
            }
            return item
        }))
        const todo = todos.find(item => item.id === id )
        axios.put(`http://localhost:3000/db/${id}`, todo)
    }

    //axios DELETE
    const removeTodo = id => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }))
        const todo = todos.filter(item => item.id !== id)
        axios.delete(`http://localhost:3000/db/${id}`, todo)
        // console.log("todos", todos)
    }
    
        return (
            <Context.Provider value={{
                removeTodo, changeTodo, changeChecked
            }}>
            <div className="todo">
                {/* <h1 className="todo__title">To Do</h1> */}
                <div className="todo__form">
                    {/* <input 
                        type="text" 
                        value={todoTitle}
                        onChange={event => SetTodoTitle(event.target.value)}
                        onKeyPress={addTodo}
                    ></input> */}
                    <div className="todo__form-input">
                        <TextField value={todoTitle}
                            onChange={event => SetTodoTitle(event.target.value)}
                            onKeyPress={addTodo} id="outlined-basic" variant="outlined" style={{ margin: 8 }} size="small"/>
                    </div>   
                    <div className="todo__form-button"> 
                    {/* <button onClick={addTodo}>ADD</button> */}
                        <Button onClick={addTodo} variant="contained" color="primary" size="large">ADD</Button>
                    </div>
                </div>
                <Todolist todos={todos}/>
            </div>
            </Context.Provider>
        )
    
}
