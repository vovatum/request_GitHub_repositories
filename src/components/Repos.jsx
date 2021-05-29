import ReactPaginate from 'react-paginate';


export function Repos(props) {

    const pageCount = Math.ceil(props.reposNum / props.perPage)
    // const offset = 3
    const handlePageClick = (e) => {
        let selectedPage = e.selected + 1
        props.fetchRepos(selectedPage)
    }

    return (
        <div key={props.reposNum}>
            <h1 className={'repos'}>Repositories({props.reposNum})</h1>
            {
                props.repos.map(repo => <div className={'repo'} key={repo.id}>
                    <div className={'repoName'}>{repo.name}</div>
                    <div className={'repoDescription'}>{repo.description}</div>
                </div>)
            }
            {/*<ReactPaginate*/}
            {/*    previousLabel={'<'}*/}
            {/*    nextLabel={'>'}*/}
            {/*    breakLabel={'...'}*/}
            {/*    breakClassName={'break-me'}*/}
            {/*    pageCount={pageCount}*/}
            {/*    marginPagesDisplayed={1}*/}
            {/*    pageRangeDisplayed={2}*/}
            {/*    onPageChange={handlePageClick}*/}
            {/*    containerClassName={'pagination'}*/}
            {/*    activeClassName={'active'}*/}
            {/*/>*/}
        </div>
    )
}