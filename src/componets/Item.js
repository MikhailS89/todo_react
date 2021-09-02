import React from 'react'


export default function Item (props) {
    return (
            <div>
                <form>
                    <input type="checkbox" defaultChecked={props.status}></input>
                    <input defaultValue={props.value}></input>
                    <button>DEL</button>
                </form>
            </div>
    )
}
