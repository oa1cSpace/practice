import React from 'react';

import '../App.css';

class BtnBackHome extends React.Component{
    render() {

        const textBtnBackHome = this.props.textBtnBackHome;
        const typeBtnBackHome = this.props.typeBtnBackHome;

        return (
            <div className='d-flex justify-content-between mt-3'>
                <button className="btn text-white" type={typeBtnBackHome}>{textBtnBackHome}</button>
            </div>
        );
    }

}

export default BtnBackHome;