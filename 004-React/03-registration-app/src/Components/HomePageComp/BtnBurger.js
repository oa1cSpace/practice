import React from 'react';

class BtnBurger extends React.Component {
    render() {
        return (
            <div className='vertical-navigation sticky-top filter-container'>
                <div className='height_100'>
                    <nav className="navbar navbar-dark menu-btn-color p-0">
                        <button className="navbar-toggler p-0 " type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    {/*COLLAPSE_CARD_ITEMS*/}
                    <div className="height_100" id="navbarToggleExternalContent">
                        <div className="card card-body height_100">
                            <a className="nav-link active" href="#"> Главная </a>
                            <a className="nav-link active" href="#"> Пользователи </a>
                            <a className="nav-link active" href="#"> Товары </a>
                            <a className="nav-link active" href="#"> Заказы </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BtnBurger;