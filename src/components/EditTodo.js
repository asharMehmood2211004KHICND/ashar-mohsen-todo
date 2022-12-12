import { useState } from 'react';
function EditTodoList({ todoList, setTodoList, title, description, deadline, }) {
    const [updateDescription, setUpdateDescription] = useState(description);
    const [updateTitle, setUpdateTitle] = useState(title);
    const [updateDeadline, setUpdateDeadline] = useState(deadline);
    const [edit, setEdit] = useState(false)


    const handleEditTitle = (event) => {
        setUpdateTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setUpdateDescription(event.target.value)
    }
    const handleDeadline = (event) => {
        setUpdateDeadline(event.target.value)
    }
    const HandleDelete = () => {
        setTodoList(todoList.filter((element) => element.title !== title))
    }

    const handleEdit = () => {
        if (edit) {
            const editedTodoList = todoList.map((element) => {
                if (title === element.title) {
                    return { ...element, title: updateTitle, description: updateDescription, deadline: updateDeadline }
                } else { return element; }
            })
            setTodoList(editedTodoList)
            setEdit(!edit)

        } else { setEdit(!edit) }
    }

    return (
        <section>
            <section className="item-secton">
                <div className="inner-section">
                    {edit ?
                        <><label>Title:</label>
                            <input type="text" value={updateTitle} onChange={handleEditTitle} />
                            <label>Description:</label>
                            <input type="text" value={updateDescription} onChange={handleDescription} />
                            <label>Deadline:</label>
                            <input type="date" value={updateDeadline} onChange={handleDeadline} />
                        </>
                        :
                        <div className='label-div'>
                            <div><button type="button" onClick={HandleDelete} class="btn-close" aria-label="Close"></button></div>
                            <label>{title}</label>
                            <label>{description}</label>
                            <label>{deadline}</label>
                        </div>
                    }
                </div>
                <div>
                    <button onClick={handleEdit} className="edit-button" ><i class="bi bi-vector-pen"></i></button>
                </div>
            </section>
        </section>
    )
} export default EditTodoList;