import React, { useEffect, useState } from 'react'
import Form from './Form'
import Todolist from './Todolist';
import { STATUS } from './constants'


// const STATUS={
//     ALL: 'all',
//     COMPLETED: 'completed',
//     INCOMPLETED: 'incompletd',
//   }

function Main7() {
    //for input
    let [inptext, setInpText] = useState('')
    //for filter
    const [status, setStatus] = useState(STATUS.ALL);
    //for todolist data
    const [todos, setToDos] = useState([])
    //for filtered 
    const [filteredData, setFilteredData] = useState([])


    let filterHandler = () => {
        switch (status) {
            case STATUS.COMPLETED:
                setFilteredData(
                    todos.filter(todo => todo.completed == true)
                )
                break;
            case STATUS.INCOMPLETED:
                setFilteredData(
                    todos.filter(todo => todo.completed == false)
                )
                break;
            
            default:
                setFilteredData(todos)
        }
    }
    useEffect(() => {
        filterHandler()
    }, [status, todos])


    // const filteredData = todos?.filter(item=> inptext ? item?.text?.toLowerCase()?.includes(inptext?.toLowerCase()): true)?.filter(item=> {

    //     if(status === 'all'){
    //         return item;
    //     }
    //     if(status === 'completed' && item.completed){
    //         return item;
    //     }else if(status === 'incompleted' && !item.completed){
    //         return item;
    //     }
    // })
    return (
        <div>
            <Form
                inptext={inptext}
                setInpText={setInpText}
                setStatus={setStatus}
                todos={todos}
                setToDos={setToDos}
            />
            <Todolist
                todos={todos}
                setToDos={setToDos}
                filteredData={filteredData}
            />
        </div>
    )
}
export default Main7
