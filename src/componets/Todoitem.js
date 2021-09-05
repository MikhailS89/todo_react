import React, {useContext} from 'react'
import {Context} from './context'
import './Todoitem.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


export default function Todoitem({id, value, status}) {
    const {removeTodo, changeTodo, changeChecked} = useContext(Context)

    return (
        <div className="box__form">
            <form className="form">
                <div className="form__checkbox">
                <Checkbox onChange={(event)=> changeChecked(id, event.target.checked)} defaultChecked={status} color="primary" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </div>
                <div className="form__input">
                <TextField  onChange={(event)=> changeTodo (id, event.target.value)} defaultValue={value} />
                </div>
                <div className="form__button">
                <Button onClick={()=> removeTodo(id)} variant="outlined">DEL</Button>
                </div>
            </form>
        </div>
    )
}
