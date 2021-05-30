import './App.scss';
import {useSelector} from "react-redux";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Status} from "./components/Status";
import {UserContainer} from "./components/UserContainer";
import {Preloader} from "./components/Preloader";
import {HeaderContainer} from "./components/HeaderContainer";


function App() {

    const user = useSelector(state => state.user)
    const errors = useSelector(state => state.errors)
    const status = useSelector(state => state.status)

    return (
        <div className="app">
            <div className="header">
                <HeaderContainer/>
            </div>
            <div className={'body'}>
                {
                    status.isFetchingUser
                        ? <Preloader/>
                        : user.id
                        ? <UserContainer/>
                        : <Status
                            errors={errors}
                            faIcon={faSearch}/>
                }
            </div>
        </div>
    )
}

export default App;
