import AddTodo from "../AddTodo/AddTodo"

function Todo(){
    return(
        <>
            <div id="TodoBody">
                <h1 style={{
                    color:'white',
                    textAlign:"center",
                    marginTop:'1rem'
                }}>Simple Todo</h1>
                <AddTodo/>
            </div>
        </>
    )
}

export default Todo