import '../styles/some.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export function Status(props) {

    const statusMessage = props.errors.fetchUserError
        ? 'User not found'
        : props.errors.fetchReposError
            ? 'Repository is empty'
            : 'Start with searching a GitHub user'

    return (
        <div className={'status'}>
            <FontAwesomeIcon className={'icon'} icon={props.faIcon}/>
            <span className={'statusMessage'}>{statusMessage}</span>
        </div>
    )
}