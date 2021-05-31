import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUserFriends} from "@fortawesome/free-solid-svg-icons";


export function  User(props) {
    return (
        <div className={'userData'} key={props.userData.user.id}>
            <img className={'userPhoto'}
                 src={props.userData.user.avatar_url} alt={"avatar"}/>
            <div>
                <h2 className={'userFullName'}>{props.userData.user.name}</h2>
                <h4 className={'userName'}>
                    <a className={'userName'} href={props.userData.user.html_url} target="_blank" without
                       rel="noreferrer">{props.userData.user.login}</a>
                </h4>
                <FontAwesomeIcon className={'userIcon'} icon={faUserFriends}/>
                <span className={'follow'}>{props.userData.user.followers} followers</span>
                <FontAwesomeIcon className={'userIcon'} icon={faUser}/>
                <span className={'follow'}>{props.userData.user.following} following</span>
            </div>
        </div>
    )
}