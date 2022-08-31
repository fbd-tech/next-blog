// const
import PaginationConst from "../../constants/PaginationConst"

const Pagination = ({ total, sizePerPage, currentPage, path }: {
    total: number,
    sizePerPage: number,
    currentPage: number,
    path: string,
}) => {
    const totalPage = Math.ceil(total/sizePerPage)
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-8 sm:px-6">
          <div className="flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href={`${path}/1`}
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                  </svg>

                </a>
                <a
                  href={`${path}/${Math.max(1, currentPage - 1)}`}
                  className="relative inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
                {[...Array(PaginationConst.allBox)].map((_,i) => {
                    let page
                    const a = i + 1
                    const b = currentPage + a - 2
                    const c = totalPage - (PaginationConst.allBox - a)
                    if (totalPage <= PaginationConst.allBox) {
                        if (totalPage < a) { return }
                        page = a
                    } else {
                        if (a <= PaginationConst.breakPoint - 1) {
                            page = Math.max(a, Math.min(b, c))
                        } else if (a == PaginationConst.breakPoint) {
                            page = b < c ? '...' : c
                        } else if (PaginationConst.breakPoint + 1 <= a) {
                            page = c
                        }
                    }
                    return (
                        <a
                            key={i}
                            href={`${path}/${page}`}
                            className={currentPage == page ? "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600" : "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"}>
                            {page}
                        </a>
                    )
                })}
                <a
                  href={`${path}/${Math.min(totalPage, currentPage + 1)}`}
                  className="relative inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
                <a
                  href={`${path}/${totalPage}`}
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>


                </a>
              </nav>
            </div>
          </div>
        </div>
      )
}

export default Pagination