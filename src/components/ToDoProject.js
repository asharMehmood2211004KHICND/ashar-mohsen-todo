import { useState } from "react";
import UiFormList from "./FormInput";
import TodoList from "./TodoList";

function ToDoList() {

    const [todoList, setTodoList] = useState([]);
    const [formShow, setFormShow] = useState(false)
    // const [counter, setCounter] = useState(1);

    return (
        <section className="list-container">
            <div className="main-div"><h3>Mohsen & Ashar's ToDos</h3></div>
            {formShow ? <UiFormList todoList={todoList} setTodoList={setTodoList} setFormShow={setFormShow} /> : <TodoList todoList={todoList} setTodoList={setTodoList} setFormShow={setFormShow} />
            }
        </section>
    )
}
export default ToDoList;