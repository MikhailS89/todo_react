import React, {useState, useEffect} from 'react'
import Todolist from './Todolist'
import {Context} from './context'
import axios from 'axios'

export default function Todocontainer (){

    const [todos, setTodos] = useState([
        // {id: 0,value: "Колбасы",status: true},
        // {id: 1,value: "Сосиски",status: false},
        // {id: 2,value: "Филе", status: false },
        // {id: 3,value: "Курица",status: false},
        // {id: 4, value: "Ветчина",status: false}
    ])
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

    const addTodo = event => {
        if (event.key === "Enter" || event.type === "click"){
            setTodos([
                ...todos, {
                    id: Date.now(),
                    value: todoTitle,
                    status: false
                }
            ])
            SetTodoTitle('')
        }
        console.log(event)
    }

    //не доделан метод changeTodo
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
