import './App.css';
import {EnterField} from "./components/enterField";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDataTC} from "./state/userDataReducer";


function App() {

    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch()

    const fetchUserData = (userName) => {
        dispatch(fetchUserDataTC(userName))
    }


    return (
        <div className="App">
            <header className="App-header">
                <EnterField
                    fetchUserData={fetchUserData}
                    userName={userData.name}
                />
            </header>
            <body>
            <div key={userData.id}>
                <img src={userData.avatar} alt={'avatar'}/>
                <h2>{userData.name}</h2>
                <h4>{userData.login}</h4>
            </div>
            <div>
                <h1>Repositories({userData.repos})</h1>
                list repoData
            </div>
            </body>
            {/*<footer>*/}
            {/*    pagination*/}
            {/*</footer>*/}
        </div>
    )
}

export default App;
