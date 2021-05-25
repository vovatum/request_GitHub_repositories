import {useDispatch, useSelector} from "react-redux";
import './Body.css'
import {User} from "./User";
import {fetchReposTC} from "../state/reposReducer";
import {useEffect} from "react";


export function Body() {

    const user = useSelector(state => state.user)
    const repos = useSelector(state => state.repos)
    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReposTC(user.login))
    }, [dispatch, user.login])

    return (
        <div className={'body'}>
            {
                !errors.fetchUserError
                    ? <User user={user}/>
                    : <div>user not found</div>
            }
            {
                !errors.fetchReposError
                    ? <div>
                        <h1>Repositories({user.public_repos})</h1>
                        {
                            repos.map(repo => <ul key={repo.id}>
                                <li>{repo.name}</li>
                                <li>{repo.description}</li>
                            </ul>)
                        }
                    </div>
                    : <div>repositories not found</div>
            }
        </div>
    )
}