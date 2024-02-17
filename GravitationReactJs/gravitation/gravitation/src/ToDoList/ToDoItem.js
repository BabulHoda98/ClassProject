import React from 'react'
import cow from './todo.module.css'

function ToDoItem({ todos, setToDos, todo }) {

    let deleteHandler = () => {
        setToDos(
            todos.filter((ele) => ele.id !== todo.id)
        )
    }
    let handleComplete = () => {
        setToDos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        // ...item,complete:!item.completed
                        ...item, completed: true
                    }
                } else {
                    return item
                }
            })
        )
    }

    let doneColor = todo.completed === true ? cow.doneitem : ''  

    return (
        <div className="m-5 w-50 d-flex">
            <h3 style={{marginRight:'40px'}} className={doneColor}>{todo.text}</h3>
            <button className='btn btn-outline-success' onClick={handleComplete}>DONE</button>
            <button className='btn btn-outline-danger' onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default ToDoItem
