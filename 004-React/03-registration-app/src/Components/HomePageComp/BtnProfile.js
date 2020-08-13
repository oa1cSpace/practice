import React from 'react';

class BtnProfile extends React.Component{
    render() {
        return(
            <div className="btn-group d-flex justify-content-end filter-container">
                <div>
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Профиль
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Главная</a>
                        <a className="dropdown-item" href="#">Пользователи</a>
                        <a className="dropdown-item" href="#">Товары</a>
                        <a className="dropdown-item" href="#">Заказы</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Выход</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BtnProfile;