import '../styles/reposData.scss'
import '../styles/general.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchReposTC, setCurrentPageAC} from "../state/reposReducer";
import {useEffect} from "react";
import {Preloader} from "./Preloader";
import {Repos} from "./Repos";
import {Status} from "./Status";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";


export function ReposContainer() {

    const userData = useSelector(state => state.user)
    const reposData = useSelector(state => state.repos)
    const errors = useSelector(state => state.errors)
    const status = useSelector(state => state.status)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchReposTC(userData.user.login, reposData.perPage, reposData.currentPage))
    }, [dispatch, userData.user.login, reposData.currentPage, reposData.perPage])

    const setCurrentPage = (numPage) => {
        dispatch(setCurrentPageAC(numPage))
    }

    return (
        <div className={'reposData'}>
            {
                status.isFetchingRepos
                    ? <div className={'loaderContainer'}><Preloader/></div>
                    : !errors.fetchReposError
                    ? <Repos reposData={reposData}
                             numRepos={userData.user.public_repos}
                             setCurrentPage={setCurrentPage}
                    />
                    : <Status errors={errors}
                              faIcon={faTimesCircle}/>
            }
        </div>
    )
}