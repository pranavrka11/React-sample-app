import { useState } from 'react';
import './Todo.css'

function Todo() {
    var [todos, setTodos] = useState([{
        "userId": 0,
        "id": 0,
        "title": "0",
        "completed": true
    }])

    // var todo = {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": true
    // }

    var fetchData = () => fetch("https://jsonplaceholder.typicode.com/todos")
        .then(r => r.json())
        .then(r => {
            setTodos(r);
        })
        .catch(r => console.log(r));

    return (
        <div>
            <h1 className="title-block">Todo for the day</h1>
            <button onClick={fetchData} className='btn btn-info'>Get Data</button>
            {todos.map((todo)=>
                <div className='alert alert-success tododiv' key={todo.id}>
                Id : {todo.id}
                <br />
                Title : {todo.title}
                <br />
                Status : <button className='btn btn-primary' disabled={!todo.completed}>Buy</button>
            </div>
            )}
        </div>
    )
}

export default Todo;