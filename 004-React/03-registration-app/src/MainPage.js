import React from 'react';

export default class MainPage extends React.Component {
    render() {
        return (
            <div className='underlayer main-page-container height_100'>
                <div className='nav-container'>
                    <div className="btn-group d-flex justify-content-end">
                        <div>
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Профиль
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Главная</a>
                                <a className="dropdown-item" href="#">Пользователи</a>
                                <a className="dropdown-item" href="#">Товары</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Заказы</a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='main-page-body'>
                    <div className='vertical-navigation'>

                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="card card-body">
                                <a className="nav-link active" href="#"> Главная </a>
                                <a className="nav-link active" href="#"> Пользователи </a>
                                <a className="nav-link active" href="#"> Товары </a>
                                <a className="nav-link active" href="#"> Заказы </a>
                            </div>
                        </div>

                    </div>

                    <div className='table-container container mt-3 height_100'>
                        <table className="table table-striped">
                            <thead className='thead-dark'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Фамилия</th>
                                <th scope="col">Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="fixed-bottom">

                    <nav aria-label="Page navigation example page-nav">
                        <ul className="pagination justify-content-center">
                            <li className="page-item shadow">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item shadow"><a className="page-link" href="#">1</a></li>
                            <li className="page-item shadow"><a className="page-link" href="#">2</a></li>
                            <li className="page-item shadow"><a className="page-link" href="#">3</a></li>
                            <li className="page-item shadow">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <footer className="footer  justify-content-center">
                        <p className="text-center">辛苦工作总有回报的 &#169;</p>
                    </footer>

                </div>

            </div>
        );
    }
}