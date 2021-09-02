import React, {useContext} from 'react'
import {Context} from './context'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
// import FormControl from '@material-ui/core/FormControl';

export default function Todoitem({id, value, status}) {
    const {removeTodo, changeTodo, changeChecked} = useContext(Context)

    return (
        <div>
            <form>
            {/* <FormControl>  */}
                {/* <input onChange={(event)=> changeChecked(id, event.target.checked)} type="checkbox"
                defaultChecked={status}></input> */}
                <Checkbox onChange={(event)=> changeChecked(id, event.target.checked)} defaultChecked={status} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            
                {/* <input onChange={(event)=> changeTodo (id, event.target.value)} defaultValue={value}></input> */}
                <TextField onChange={(event)=> changeTodo (id, event.target.value)} defaultValue={value} id="standard-basic" />

                {/* <button onClick={()=> removeTodo(id)}>DEL</button> */}
                <Button onClick={()=> removeTodo(id)} variant="outlined">DEL</Button>
            {/* </FormControl>        */}
            </form>
        </div>
    )
}
