import '../styles/reposData.scss'
import '../styles/pagination.scss'
import ReactPaginate from 'react-paginate';


export function Repos(props) {

    const pageCount = Math.ceil(props.numRepos / props.reposData.perPage)

    const leftNumPagination = (props.reposData.currentPage - 1) * props.reposData.perPage + 1
    const rightNumPagination = props.reposData.currentPage * props.reposData.perPage >= props.numRepos
        ? props.numRepos
        : props.reposData.currentPage * props.reposData.perPage

    const items = rightNumPagination === props.numRepos
        ? `${rightNumPagination} of ${props.numRepos} items`
        : `${leftNumPagination} - ${rightNumPagination} of ${props.numRepos} items`

    const handlePageClick = (e) => {
        let selectedPage = e.selected + 1
        props.setCurrentPage(selectedPage)
    }

    const previousLinkClassName = props.reposData.currentPage === 1
        ? 'disabledArrowLink'
        : 'arrowLink'
    const nextLinkClassName = props.reposData.currentPage === pageCount
        ? 'disabledArrowLink'
        : 'arrowLink'

    console.log(props.reposData.currentPage )

    return (
        <div className={'reposDataContainer'}>
            <div className={'reposContainer'} key={props.numRepos}>
                <span className={'repos'}>Repositories({props.numRepos})</span>
                {
                    props.reposData.repos.map(repo => {
                        return <div className={'repo'} key={repo.id}>
                            <a href={repo.html_url} target="_blank" without rel="noreferrer"
                               className={'repoName'}>{repo.name}</a>
                            <div className={'repoDescription'}>{repo.description}</div>
                        </div>
                    })
                }
            </div>
            <div className={'paginContainer'}>
                <div className={'paginItems'}>
                    {items}
                </div>
                <ReactPaginate
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousLabel={'<'}
                    previousLinkClassName={previousLinkClassName}
                    nextLabel={'>'}
                    nextLinkClassName={nextLinkClassName}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    subContainerClassName={"pages pagination"}
                    forcePage={props.reposData.currentPage - 1}
                />
            </div>
        </div>
    )
}