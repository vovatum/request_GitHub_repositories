import './base.scss'
import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {ReposContainer} from "./ReposContainer";
import {useEffect} from "react";
import {fetchUserTC} from "../state/userReducer";
import {Status} from "./Status";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export function UserContainer() {

    const userData = useSelector(state => state.user)
    const errors = useSelector(state => state.errors)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if (userData.userName !== '') {
    //         dispatch(fetchUserTC(userData.userName))
    //     }
    // }, [dispatch, userData.userName, userData.user, userData])

    return (
        <div className={userData.user.id ? 'body' : 'statusContainer'}>
            {
                userData.user.id
                    ? <>
                        <User userData={userData}/>
                        <ReposContainer/>
                    </>
                    : <div className={'status'}>
                        <Status
                            errors={errors}
                            faIcon={faSearch}/>
                    </div>
            }
        </div>)
}