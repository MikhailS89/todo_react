import React, {useContext} from 'react'
import {Context} from './context'

export default function Todoitem({id, value, status}) {
    const {removeTodo, changeTodo} = useContext(Context)

    return (
        <div>
            <form>
                <input type="checkbox"
                defaultChecked={status}></input>
                <input onChange={(event)=> changeTodo (id, event.target.value)} defaultValue={value}></input>
                <button onClick={()=> removeTodo(id)}>DEL</button>
            </form>
        </div>
    )
}
