import {User} from "./User";
import {useSelector} from "react-redux";
import {ReposContainer} from "./ReposContainer";


export function UserContainer() {

    const user = useSelector(state => state.user)

    return (
        <>
            <User user={user}/>
            <ReposContainer/>
        </>
    )
}