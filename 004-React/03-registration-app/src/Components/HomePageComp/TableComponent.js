import React from 'react';
import RowComponent from './RowComponent';
import PaginationComponent from "./PaginationComponent";

class TableComponent extends React.Component {
    state = {
        inputFilter: '',
        currentPage: 1,
        rowsPerPage: 10,
        rowsFiltered: [...this.props.rows],
    };

    filterColumn = (inputFilter, column) => {
        return column
            .toString()
            .toLowerCase()
            .includes(inputFilter.toLowerCase());
    }

    nextPage = () => {
        const currentPage = this.state.currentPage;
        this.setState({currentPage: currentPage + 1});
    }

    prevPage = () => {
        const currentPage = this.state.currentPage;
        this.setState({currentPage: currentPage - 1});
    }

     setPage = (number) => {
         this.setState({currentPage: number});
     }

     getPagesCount = () => {
        return Math.ceil(this.state.rowsFiltered.length / this.state.rowsPerPage);
    };

     searchFieldChanged = (event) => {
        const {value: searchPhrase} = event.target;

        const rowsFiltered = this.props.rows.filter((row) => {
            return Object.values(row)
                .filter((column) => this.filterColumn(searchPhrase, column)).length;
        });

        return this.setState({currentPage: 1, rowsFiltered: rowsFiltered});
    };

    indexOfLastRow = () => {
        return this.state.currentPage * this.state.rowsPerPage;
    };

    indexOfFirstRow = () => {
        return (this.state.currentPage * this.state.rowsPerPage) - this.state.rowsPerPage;
    };

    render() {
        return (
            <div>
                <input className="form-control border mb-3"
                       id="myInput"
                       type="text"
                       placeholder="Отфильтровать..."
                       onKeyUp={this.searchFieldChanged}/>

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
                        this.state.rowsFiltered
                            .slice(this.indexOfFirstRow(), this.indexOfLastRow())
                            .map((row) => <RowComponent key={row.uniqueId} row={row} />)
                    }
                    </tbody>
                </table>

                <nav aria-label="Page Navigation">
                    <PaginationComponent
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}
                        setPage={this.setPage}
                        pagesCount={this.getPagesCount()}
                        currentPage={this.state.currentPage}
                    />
                </nav>
            </div>
        );
    }
}

export default TableComponent;
