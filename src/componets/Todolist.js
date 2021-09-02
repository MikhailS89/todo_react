import React from 'react'
import Todoitem from './Todoitem'

export default function Todolist({todos}) {
    return (
        <div>
            {todos.map(item => <Todoitem key={item.id} {...item}/>)}
        </div>
    )
}
