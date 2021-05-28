import ReactPaginate from 'react-paginate';


export function Repos(props) {

    const pageCount = Math.ceil(props.reposNum / props.perPage)
    const offset = 3
    const handlePageClick = (e) => {
        let selectedPage = e.selected + 1
        props.fetchRepos(selectedPage)
    }

    return (
        <>
            {
                !props.error
                    ? <div className={'repos'} key={props.reposNum}>
                        <h1>Repositories({props.reposNum})</h1>
                        {
                            props.repos.map(repo => <ul key={repo.id}>
                                <li>{repo.name}</li>
                                <li>{repo.description}</li>
                            </ul>)
                        }
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                    : <div>repositories not found</div>
            }
        </>
    )
}