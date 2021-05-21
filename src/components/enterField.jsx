import React, {useState} from "react";


export const EnterField = (props) => {

    let [userName, setUserName] = useState('Enter GitHub username')
    let [title, setTitle] = useState('')
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const activateViewMode = (title) => {
        if (title.trim() !== '') {
            setEditMode(false)
            setUserName(title)
            props.fetchUserData(title)
        } else {
            setTitle('Title is required')
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
                <span onClick={activateEditMode}>{userName}</span>
            </>
    )
}
