import {useDispatch} from "react-redux";
import {fetchUserTC} from "../state/userReducer";
import {Header} from "./Header";


export function HeaderContainer() {

    const dispatch = useDispatch()

    const fetchUser = (userName) => {
        dispatch(fetchUserTC(userName))
    }

    return (
        <Header fetchUser={fetchUser}/>
    )
}