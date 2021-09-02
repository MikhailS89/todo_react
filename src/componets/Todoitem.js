import React, {useContext} from 'react'
import {Context} from './context'
import './Todoitem.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
// import FormControl from '@material-ui/core/FormControl';


export default function Todoitem({id, value, status}) {
    const {removeTodo, changeTodo, changeChecked} = useContext(Context)

    return (
        <div className="box__form">
            <form className="form">
            {/* <FormControl className="form">  */}
                {/* <input onChange={(event)=> changeChecked(id, event.target.checked)} type="checkbox"
                defaultChecked={status}></input> */}
                <div className="form__checkbox">
                <Checkbox onChange={(event)=> changeChecked(id, event.target.checked)} defaultChecked={status} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </div>
            
                {/* <input onChange={(event)=> changeTodo (id, event.target.value)} defaultValue={value}></input> */}
                <div className="form__input">
                <TextField  onChange={(event)=> changeTodo (id, event.target.value)} defaultValue={value} />
                </div>
                {/* Удален элемент id="standard-basic" */}

                {/* <button onClick={()=> removeTodo(id)}>DEL</button> */}
                <div className="form__button">
                <Button onClick={()=> removeTodo(id)} variant="outlined">DEL</Button>
                </div>
            {/* </FormControl>        */}
            </form>
        </div>
    )
}
