import React from 'react';


class BtnLogin extends React.Component {
    render() {

        const textBtnLogin = this.props.textBtnLogin;
        const typeBtnLogin = this.props.typeBtnLogin;

        return (
            <div className='d-flex justify-content-between mt-3'>

                    <button className="btn text-white" type={typeBtnLogin}>{textBtnLogin}</button>
            </div>
        );
    }
}

export default BtnLogin;