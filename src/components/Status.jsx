import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export function Status(props) {

    return (
        <div className={'statusContainer'}>
            <FontAwesomeIcon className={'icon'} icon={props.faIcon}/>
            <span className={'statusMessage'}>{props.statusMessage}</span>
        </div>
    )
}