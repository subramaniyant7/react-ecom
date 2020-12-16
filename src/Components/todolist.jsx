import { useState } from "react";
const Todolist = (props) => {

    const [text,setText] = useState('');
    const [list,setList] = useState([]);
    const [todoerror,setTodoerror] = useState(false);

    const addList = () => {
        if(text !== ''){
            setList([...list,{'todo':text}]);
            setText('');
            setTodoerror(false);
        }else{
            setTodoerror(true)
        }
    }

    const deleteTodo = (row) => {
        const newTodo = list.filter((todo,index) => index!==row);
        setList(newTodo)
    }

    return(
        <div>
            Add Todo 
            { todoerror && <div className="error_msg">Please enter todo item</div>  }
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button type="button" onClick={() => addList() } >Click</button>
            <hr/> 
            Todo list
            <ul className="todo_list">
                {
                    list.length > 0 ?
                        list.map((todo,index) => 
                            <li key={index}>
                                <p >{index +1}.{todo.todo}</p>
                                <span className="delete_icon" onClick={()=>deleteTodo(index)}>
                                    <i className="fa fa-trash"></i>
                                </span>
                            </li> ) 
                        : 'No todo list'
                }
            </ul>
        </div>
    );
}

export default Todolist;