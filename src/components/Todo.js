import React from "react";

export default function Todo({todo, toggleComplete,deleteTodo}){
    return(
        <div className={todo.completed? 'alert-success':'alert-primary'}>
            <div className="d-flex todo">
                <h4 onClick={()=> toggleComplete(todo)} className={todo.completed ? 'done': ''}>{todo.text}</h4>
                <span >
                    <input onChange={()=> toggleComplete(todo)} type='checkbox' className="form-checkbox"  checked={todo.completed ? 'checked': ''} />
                    <button className="btn" onClick={()=>deleteTodo(todo.id)} ><i className="bi bi-trash3-fill"></i></button>
                </span>
            </div>
        </div>
    )
}