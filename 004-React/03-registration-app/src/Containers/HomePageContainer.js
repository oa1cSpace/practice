import React from 'react';
import TableComponent from "../Components/HomePageComp/TableComponent";
import BtnProfile from "../Components/HomePageComp/BtnProfile";
import BtnBurger from "../Components/HomePageComp/BtnBurger";
import {generateName, generateEmail, generateId} from "../Functions/RandomFunctions";
import {connect} from "react-redux";
import {generateData} from "../Components/redux/actions/row";

class HomePageContainer extends React.Component {

    componentDidMount() {
        this.props.generateData(this.generateRows());
    }

    generateRows() {
        const amountOfRows = 100;
        const result = [];
        for (let i = 0; i < amountOfRows; i++) {
            result.push({
                id: generateId(),
                name1: generateName(),
                name2: generateName(),
                name3: generateName(),
                email: generateEmail(),
                uniqueId: i,
            })
        }

        return result;
    };

    render() {
        return (
            <div className='containerWhite home-page-container scroll'>
                <BtnBurger/>
                <BtnProfile/>
                <div className='container-sm'>
                    {/*<TableComponent rows={this.state.rows}/>*/}
                    <TableComponent/>
                </div>
            </div>
        );
    };
}

export default connect(null, { generateData })(HomePageContainer);
