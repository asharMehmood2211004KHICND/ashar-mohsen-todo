import { useState } from "react";
function UiFormList({ todoList, setTodoList, formShow, setFormShow }) {

    const date = new Date('10/12/2020');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(date);


    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleDeadline = (e) => {
        setDeadline(e.target.value)
    }
    const handleClick = () => {
        if (title === '') {
            alert(`Title field is required`)
        }
        else if (description === '') {
            alert(`Description field is required`)
        }
        else if (deadline === '') {
            alert(`Deadline field is required`)
        }
        else {
            const arr = [{ title: title, description: description, deadline: deadline }, ...todoList];
            setTodoList(arr);
            setDescription('')
            setFormShow((showForm) => !showForm)
        }
    }

    return (
        <>
            <section className="input-container">
                <div className="inputs-div">
                    <div><label>Title:</label>
                        <input className="title" type="text" placeholder='Title' onChange={handleTitle} value={title} /></div>
                    <div><label>Description:</label>
                        <input type="text" placeholder="Description" onChange={handleDescription} value={description} /></div>
                    <div><label>Deadline:</label>
                        <input type="date" className="deadline" onChange={handleDeadline} value={deadline} /></div>
                    <button onClick={handleClick} className="plus-button" ><i class="bi bi-plus-circle"></i></button>
                </div>
            </section>
        </>
    )
}

export default UiFormList;