import './AddTodo.css'
import { useEffect, useState } from "react"
import TodoList from "../TodoList/TodoList";

function AddTodo(){
        const [dataFromLocal,setDataFromLocal] = useState([])
        const [value,setValue] = useState('');
        const [data,setData] = useState([]);
        const [ length , setLength ] = useState(0)
        
        
        const addData = (e)=>{
            e.preventDefault();
            setData((prev) => {
                const newLength = length + 1;
                setLength(newLength);
                return [...prev ,{ id: newLength, data: value }]
            });
            setValue('');
            
        }
        
        function localstoragedata(){
            const todoItems = JSON.parse(localStorage.getItem('todo')) || [];
            // console.log(todoItems)
            
            setLength(todoItems.length)
            // console.log(typeof(localStorageLength))
            console.log('Length of LocalStorage : ',todoItems.length)
            setDataFromLocal(todoItems)
            
        }
        useEffect(()=>{
            localstoragedata()
        },[])
        // console.log(length)

        function removeItem(id){
            setData((prev)=>prev.filter(item => item.id !== id))
            setDataFromLocal((prev)=>prev.filter(item => item.id !== id))

            // const todoItems = JSON.parse(localStorage.getItem('todo')) || [];
            // console.log('After deleting : ',todoItems.length)
            
            // setLength(todoItems.length)
            
        }
        return (
            <>
                <div id="addtodo">
                    <form onSubmit={addData}>
                        <input
                            type="text"
                            name="text"
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}
                            required
                            placeholder='Write Something...'
                        />
                        <button className="btn" id="addbtn"type="submit">Add</button>
                    </form>
                </div>
                <div id="alltodo">
                
                    {dataFromLocal && dataFromLocal.map((el,idx)=><TodoList key={`local-${idx}`} data={el.data} id={el.id} initial={true} removeItem={removeItem} /> )}

                    {data.map((d,idx)=><TodoList key={`new-${idx}`} data={d.data} id={d.id} initial={false} removeItem={removeItem}/>)}
                </div>
            </>
        )
    }

    export default AddTodo