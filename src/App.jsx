import './App.css';
import {EnterField} from "./components/enterField";
import {useDispatch} from "react-redux";
import {fetchUserTC} from "./state/userReducer";
import {Body} from "./components/Body";


function App() {

    const dispatch = useDispatch()

    const fetchUser = (userName) => {
        dispatch(fetchUserTC(userName))
    }

    return (
        <div className="App">
            <header className="App-header">
                <EnterField fetchUser={fetchUser}/>
            </header>
            <Body/>
            {/*<footer>*/}
            {/*    pagination*/}
            {/*</footer>*/}
        </div>
    )
}

export default App;
