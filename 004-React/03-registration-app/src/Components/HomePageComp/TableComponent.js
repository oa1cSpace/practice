import React from 'react';
import RowComponent from './RowComponent';
import PaginationComponent from "./PaginationComponent";

class TableComponent extends React.Component {
    state = {
        inputFilter: '',
        currentPage: 1,
        rowsPerPage: 20,
    };

    render() {
        const {rows} = this.props;
        const {inputFilter, currentPage, rowsPerPage} = this.state;
        const filterColumn = (column) => {
            return column.toString().toLowerCase().includes(inputFilter.toLowerCase());
        };
        const searchFilter = (row) => {
            return Object.values(row).filter(filterColumn).length;
        };
        const filteredRows = rows.filter(searchFilter);
        const pagesCount = Math.ceil(filteredRows.length / rowsPerPage);
        const searchFieldChanged = (event) => {
            const {value} = event.target;
            this.setState({inputFilter: value, currentPage: 1});
        };
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;

        const nextPage = () => this.setState({currentPage: currentPage + 1});
        const prevPage = () => this.setState({currentPage: currentPage - 1});
        const setPage = (number) => this.setState({currentPage: number});

        return (
            <div>
                <input className="form-control border mb-3" id="myInput" type="text" placeholder="Отфильтровать..."
                       onKeyUp={searchFieldChanged}/>

                <table className="table table-hover" id='table1'>
                    <thead className="thead-dark ">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Логин</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">E-mail</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        filteredRows
                            .slice(indexOfFirstRow, indexOfLastRow)
                            .map((row) => <RowComponent key={row.uniqueId} row={row}/>)
                    }
                    </tbody>
                </table>

                <nav aria-label="Page Navigation">
                    <PaginationComponent
                        prevPage={prevPage}
                        nextPage={nextPage}
                        setPage={setPage}
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                    />
                </nav>
            </div>
        );
    }
}

export default TableComponent;
