const Pagination = ({ employeesPerPage, totalEmployees, paginate }) => {
    const pageNums = [];

    for (let index = 1; index <= Math.ceil(totalEmployees / employeesPerPage); index++) {
        pageNums.push(index);
    }

  return <div className={'pagination'}>
    <div className={'pagination__title'}>Pages:</div>

        {pageNums.map(num => (
            <div key={num}>
                <a role='button' onClick={() => paginate(num)}>
                    {num}
                </a>
            </div>
        ))}

    </div>
}

export {Pagination}
