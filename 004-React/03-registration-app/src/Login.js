import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import LoginComponent from "./Components/LoginComponent";
import PasswordComponent from "./Components/PasswordComponent";
import BtnBackHome from "./Components/BtnBackHome";
import BtnComponents from "./Components/BtnComponents";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form className="registrationForm">
                    <h1 className="registrationForm__title">Вход</h1>
                    <LoginComponent
                        name='Логин'
                        type='text'
                        patternLogin='^[a-zA-Z]+${4,60}'
                        placeholder='Логин'
                    />

                    <PasswordComponent
                        name='Пароль'
                        type='password'
                    />

                    <div className='d-flex justify-content-between mt-3'>
                        <BtnComponents
                            textBtn="Сброс"
                            className='btn btn-outline-danger'
                            type='button'
                            onClick={this.resetForm}
                        />

                        <BtnComponents
                            textBtn="Вход"
                            className='btn btn-outline-success'
                            type='button'
                        />
                    </div>
                </form>

                <div className='form group d-flex justify-content-center'>
                    <Link to='registration'>
                        <BtnBackHome
                            textBtnBackHome='Я ж не зарегистрирован! Регистрация'
                            typeBtnBackHome='button'
                        />
                    </Link>
                </div>
            </div>
        );
    }
}
