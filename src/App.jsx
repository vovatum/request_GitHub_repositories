import './App.css';
import {EnterField} from "./components/EnterField";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserTC} from "./state/userReducer";
import {User} from "./components/User";
import {Repos} from "./components/Repos";
import {fetchReposTC} from "./state/reposReducer";
import {useState} from "react";


function App() {

    const user = useSelector(state => state.user)
    const repos = useSelector(state => state.repos)
    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch()
    const perPage = 4

    const fetchUser = (userName) => {
        dispatch(fetchUserTC(userName)).then((res) => {
            !res.error && dispatch(fetchReposTC(userName, perPage, 1))
        })
    }
    const fetchRepos = (page) => {
        dispatch(fetchReposTC(user.login, perPage, page))
    }
    console.log(user.login)


    return (
        <div className="App">
            <div className="header">
                <EnterField fetchUser={fetchUser}/>
            </div>
            <div className={'body'}>
                <User user={user}
                      error={errors.fetchUserError}
                />
                <Repos repos={repos}
                       error={errors.fetchReposError}
                       reposNum={user.public_repos}
                       fetchRepos={fetchRepos}
                       perPage={perPage}
                />
            </div>
        </div>
    )
}

export default App;
