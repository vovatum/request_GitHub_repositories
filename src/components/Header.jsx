import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {EnterField} from "./EnterField";


export function Header(props) {
    return (
        <>
            <div className={'baseColor'}>
                <FontAwesomeIcon className={'githubIcon'}
                                 icon={faGithubSquare}/>
            </div>
            <div className={'searchContainer'}>
                <FontAwesomeIcon className={'search'}
                                 icon={faSearch}/>
                <EnterField setUserName={props.setUserName}/>
            </div>
        </>

    )
}