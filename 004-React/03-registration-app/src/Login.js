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
import BtnComponent from "./Components/BtnComponent";

class Login extends React.Component {
    render() {

        return (

                <div >
                    <form className="registrationForm" action="index.html">
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


                        <BtnComponent
                            textBtn1='Логин'
                            typeBtn1='submit'

                            textBtn2='Сброс'
                            typeBtn2='reset'
                        />


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

export default Login;