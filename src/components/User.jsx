import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUserFriends} from "@fortawesome/free-solid-svg-icons";


export function User(props) {


    return (
        <div className={'userData'} key={props.user.id}>
            <img className={'userPhoto'}
                 src={props.user.avatar_url} alt={"avatar"}/>
            <div>
                <h2 className={'userFullName'}>{props.user.name}</h2>
                <h4 className={'userName'}>{props.user.login}</h4>
                <FontAwesomeIcon className={'userIcon'} icon={faUserFriends}/>
                <span className={'follow'}>{props.user.followers} followers</span>
                <FontAwesomeIcon className={'userIcon'} icon={faUser}/>
                <span className={'follow'}>{props.user.following} following</span>

            </div>
        </div>
    )
}