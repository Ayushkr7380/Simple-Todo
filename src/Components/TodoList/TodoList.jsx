import { useState } from 'react';
import './TodoList.css'
function TodoList({id,data , initial ,removeItem}){
    const [ status , setStatus ] = useState(initial)
    let addToLocalStorage = () =>{
        
        const todoItems = { id , data }
        const locallyData = JSON.parse(localStorage.getItem('todo')) || [];

        locallyData.push(todoItems);

        localStorage.setItem('todo',JSON.stringify(locallyData));


        console.log(`Added: ${id}. ${data}`);
        setStatus(true)
        console.log('after adding',localStorage.getItem('todo'))
    }

    const removeData = ()=>{
        console.log('Id for removing : ',id)
        let locallyData = JSON.parse(localStorage.getItem('todo')) || [];
        locallyData = locallyData.filter((items)=> items.id !== id || items.data !== data)
        localStorage.setItem('todo',JSON.stringify(locallyData));

        removeItem(id)
        console.log('after removing' ,localStorage.getItem('todo'))
    }
    return (
        <>  
            <div id="todolist">
                
                    <div id='alldata'>

                        <p id='data'>{id}. {data}</p>

                        <p id='status'>Status : {status ? 'Confirmed' : 'Pending'}</p>
                    </div>
                    

                    <div id="buttons">
                        <button className="btn"  id="update"onClick={status ? undefined : addToLocalStorage} >Update Status</button>
                        <button className="btn " id="remove" onClick={removeData}>Remove</button>
                    </div>
                
            </div>
        </>
    )
}
export default TodoList