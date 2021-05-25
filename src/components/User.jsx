export function User(props) {

    return (
        <div className={'user'} key={props.user.id}>
            <img src={props.user.avatar_url} alt={"avatar"}/>
            <h2>{props.user.name}</h2>
            <h4>{props.user.login}</h4>
            <h5>{props.user.followers} followers</h5>
            <h5>{props.user.following} following</h5>
        </div>
    )
}