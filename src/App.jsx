import './App.css';
import {EnterField} from "./components/enterField";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserMainDataTC} from "./state/userMainDataReducer";
import {fetchUserReposDataTC} from "./state/userReposDataReducer";


function App() {

    const userMainData = useSelector(state => state.userMainData)
    const userReposData = useSelector(state => state.userReposData)
    const error = useSelector(state => state.userDataError.fetchMainDataError)
    const dispatch = useDispatch()

    const fetchUserData = (userName) => {
        dispatch(fetchUserMainDataTC(userName))
        // dispatch(fetchUserReposDataTC(userName))
    }

    return (
        <div className="App">
            <header className="App-header">
                <EnterField
                    fetchUserData={fetchUserData}
                />
            </header>
            {
                !error
                    ? <body>
                    <div key={userMainData.id}>
                        <img src={userMainData.avatar_url} alt={'avatar'}/>
                        <h2>{userMainData.name}</h2>
                        <h4>{userMainData.login}</h4>
                    </div>
                    <div>
                        <h1>Repositories({userMainData.public_repos})</h1>
                        {
                            userReposData.map(repo => <ul>
                                <li>{repo.name}</li>
                                <li>{repo.description}</li>
                            </ul>)
                        }
                    </div>
                    </body>
                    : <div>component user not found</div>
            }
            {/*<footer>*/}
            {/*    pagination*/}
            {/*</footer>*/}
        </div>
    )
}

export default App;
