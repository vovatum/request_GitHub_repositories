import {useDispatch} from "react-redux";
import {fetchUserTC, setUserNameAC} from "../state/userReducer";
import {Header} from "./Header";


export function HeaderContainer() {

    const dispatch = useDispatch()

    const setUserName = (userName) => {
        dispatch(fetchUserTC(userName))
    }

    return (
        <Header setUserName={setUserName}/>
    )
}