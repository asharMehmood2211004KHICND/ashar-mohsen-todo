import EditTodoList from "./EditTodo";


function TodoList({ todoList, setTodoList, setFormShow }) {

    return (
        <section>
            <div className='button-div'>
                <button className="add-button" onClick={() => setFormShow(showForm => !showForm)}>Add Task</button>
            </div>
            <div className='todo-list-container'>
                {todoList.map(({ counter,title, description, deadline }) => <EditTodoList key={counter} todoList={todoList} setTodoList={setTodoList} counter={counter}  title={title} description={description} deadline={deadline} />)}
            </div>
        </section>
    )
}

export default TodoList;