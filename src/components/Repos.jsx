export function Repos(props) {

    return (
        <div className={'repos'}>
            {
                !props.error
                    ? <div>
                        <h1>Repositories({props.reposNum})</h1>
                        {
                            props.repos.map(repo => <ul key={repo.id}>
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