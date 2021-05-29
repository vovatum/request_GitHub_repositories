import './App.scss';
import {EnterField} from "./components/EnterField";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserTC} from "./state/userReducer";
import {User} from "./components/User";
import {Repos} from "./components/Repos";
import {fetchReposTC} from "./state/reposReducer";
import {useState} from "react";
import {faSearch, faUser, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {Status} from "./components/Status";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {

    const user = useSelector(state => state.user)
    const status = useSelector(state => state.status)
    const repos = useSelector(state => state.repos)
    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch()
    const perPage = 4
    const statusMessage = {
        start: 'Start with searching a GitHub user',
        notUser: 'User not found',
        emptyRepos: 'Repository is empty'
    }

    const fetchUser = (userName) => {
        dispatch(fetchUserTC(userName)).then((res) => {
            !res.error && dispatch(fetchReposTC(userName, perPage, 1))
        })
    }
    const fetchRepos = (page) => {
        dispatch(fetchReposTC(user.login, perPage, page))
    }


    return (
        <div className="app">
            <div className="header">
                <div className={'baseColor'}>
                    <FontAwesomeIcon className={'githubIcon'}
                                     icon={faGithubSquare}/>
                </div>
                <div className={'searchContainer'}>
                    <FontAwesomeIcon className={'search'}
                                     icon={faSearch}/>
                    <EnterField fetchUser={fetchUser}/>
                </div>
            </div>
            <div className={'body'}>
                {
                    status.start
                        ? <Status statusMessage={statusMessage.start}
                                  faIcon={faSearch}/>
                        : !errors.fetchUserError
                        ? <>
                            <User user={user}
                                  error={errors.fetchUserError}/>
                            <div className={'reposData'}>
                                {
                                    !errors.fetchReposError
                                        ? <Repos repos={repos}
                                                 reposNum={user.public_repos}
                                                 fetchRepos={fetchRepos}
                                                 perPage={perPage}/>
                                        : <Status statusMessage={statusMessage.emptyRepos}
                                                  faIcon={faTimesCircle}/>
                                }
                            </div>
                        </>
                        : <Status statusMessage={statusMessage.notUser}
                                  faIcon={faUser}/>
                }
            </div>
        </div>
    )
}

export default App;
