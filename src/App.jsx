import './App.scss';
import {useSelector} from "react-redux";
import {UserContainer} from "./components/UserContainer";
import {Preloader} from "./components/Preloader";
import {HeaderContainer} from "./components/HeaderContainer";


function App() {

    const status = useSelector(state => state.status)

    return (
        <div className="app">
            <div className="header">
                <HeaderContainer/>
            </div>
            <div className={status.isFetchingUser ? 'loaderContainer' : ''}>
                {
                    status.isFetchingUser
                        ? <Preloader/>
                        : <UserContainer/>
                }
            </div>
        </div>
    )
}

export default App;
