import React from 'react';
import RowComponent from "./RowComponent";
import PaginationComponent from "./PaginationComponent";
import {connect} from "react-redux";
import {updateFilteredRows, updatePage} from "../redux/actions/row";

class TableComponent extends React.Component {
    // state = {
    //     inputFilter: '',
    //     currentPage: 1,
    //     rowsPerPage: 10,
    //     rowsFiltered: [...this.props.rows],
    // };
    filterColumn = (inputFilter, column) => {
        return column
            .toString()
            .toLowerCase()
            .includes(inputFilter.toLowerCase());
    }
    // nextPage = () => {
    //     const currentPage = this.state.currentPage;
    //     this.setState({currentPage: currentPage + 1});
    // }
    // prevPage = () => {
    //     const currentPage = this.state.currentPage;
    //     this.setState({currentPage: currentPage - 1});
    // }
    setPage = (number) => {
        // this.setState({currentPage: number});
        this.props.updatePage(number);

    }
    getPagesCount = () => {
        // return Math.ceil(this.state.rowsFiltered.length / this.state.rowsPerPage);
        return Math.ceil(this.props.rowsFiltered.length / this.props.rowsPerPage);
    };
    searchFieldChanged = (event) => {
        const {value: searchPhrase} = event.target;
        const rowsFiltered = this.props.rowsInitial.filter((row) => {
            return Object.values(row)
                .filter((column) => this.filterColumn(searchPhrase, column)).length;
        });

        this.props.updateFilteredRows(rowsFiltered);
    };
    indexOfLastRow = () => {
        // return this.state.currentPage * this.state.rowsPerPage;
        return this.props.currentPage * this.props.rowsPerPage;
    };
    indexOfFirstRow = () => {
        // return (this.state.currentPage * this.state.rowsPerPage) - this.state.rowsPerPage;
        return (this.props.currentPage * this.props.rowsPerPage) - this.props.rowsPerPage;
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
                    <thead className="thead-dark">
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
                        // this.state.rowsFiltered
                        //     .slice(this.indexOfFirstRow(), this.indexOfLastRow())
                        //     .map((row) => <RowComponent key={row.uniqueId} row={row}/>)
                        this.props.rowsFiltered ?
                            this.props.rowsFiltered
                                .slice(this.indexOfFirstRow(), this.indexOfLastRow())
                                .map((row) => <RowComponent key={row.uniqueId} row={row}/>) : []
                    }
                    </tbody>
                </table>
                <nav aria-label="Page Navigation">
                    <PaginationComponent
                        /* prevPage={this.prevPage}
                         nextPage={this.nextPage}*/
                        setPage={this.setPage}
                        pagesCount={this.getPagesCount()}
                        // currentPage={this.state.currentPage}
                        currentPage={this.props.currentPage}
                    />
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {...state.rows};
};
export default connect(
    mapStateToProps, {updateFilteredRows, updatePage}
)(TableComponent);