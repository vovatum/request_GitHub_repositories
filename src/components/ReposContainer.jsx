import {Repos} from "./Repos";
import {Status} from "./Status";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {fetchReposTC} from "../state/reposReducer";
import {useEffect} from "react";
import {Preloader} from "./Preloader";


export function ReposContainer() {

    const user = useSelector(state => state.user)
    const repos = useSelector(state => state.repos)
    const errors = useSelector(state => state.errors)
    const status = useSelector(state => state.status)
    const dispatch = useDispatch()
    const perPage = 4

    useEffect(() => {
        dispatch(fetchReposTC(user.login, perPage, 1))
    }, [dispatch, user.login])

    const fetchRepos = (page) => {
        dispatch(fetchReposTC(user.login, perPage, page))
    }

    return (
        <div className={'reposData'}>
            {
                status.isFetchingRepos
                    ? <Preloader/>
                    : !errors.fetchReposError
                    ? <Repos repos={repos}
                             reposNum={user.public_repos}
                             fetchRepos={fetchRepos}
                             perPage={perPage}/>
                    : <Status errors={errors}
                              faIcon={faTimesCircle}/>
            }
        </div>
    )
}