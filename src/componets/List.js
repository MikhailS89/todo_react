import React, { Component } from 'react'
import db from './db'



export default class List extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             input: ''
        };

        this.todoList = this.todoList.bind(this);
        this.addTodoList = this.addTodoList(this);
       
    }

    addTodoList(event){
        console.log(event);
    }


    todoList(items){
        let content = [];
        for(let arr of items){
            content.push(
                    <div key={arr.id}>
                        <form>
                            <input type="checkbox" defaultChecked={arr.status}></input>
                            <input defaultValue={arr.value}></input>
                            <button onClick={this.addTodoList}>DEL</button>
                        </form>
                    </div>
            );
        }
        console.log("content", content);
        return content;
    }
    
    render() {

        return (
            <div>
                <h4>To Do List</h4>
                <form>
                    <input></input>
                    <button>ADD</button>
                </form>
                <div>
                    {this.todoList(db)}
                </div>
            </div>
        )
    }
}
