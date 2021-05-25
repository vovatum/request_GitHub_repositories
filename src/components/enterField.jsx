import React, {useState} from "react";


export const EnterField = (props) => {

    let [title, setTitle] = useState('Enter GitHub username')
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle('')
    }
    const activateViewMode = (title) => {
        if (title.trim() !== '') {
            setEditMode(false)
            props.fetchUser(title)
        } else {
            setTitle('Title is required')
            setEditMode(false)
            props.fetchUser(title)
        }
    }
    const changeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const keyPressHandler = (event) => {
        event.key === 'Enter' && activateViewMode(title)
    }


    return (
        editMode
            ? <input
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                autoFocus
            />
            : <>
                <span onClick={activateEditMode}>{title}</span>
            </>
    )
}
