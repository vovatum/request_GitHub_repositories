import React, {useState} from "react";


export const EnterField = (props) => {

    let [title, setTitle] = useState('Enter GitHub username')
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle('')
    }
    const changeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            if (title.trim() !== '') {
                props.setUserName(title.toLocaleLowerCase())
            } else {
                setTitle('Title is required')
                setEditMode(false)
            }
        }
    }

    return (
        editMode
            ? <input className={'inputField'}
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
