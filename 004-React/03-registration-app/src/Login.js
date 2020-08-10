import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import LoginComponent from "./Components/LoginComponent";
import PasswordComponent from "./Components/PasswordComponent";
import BtnBackHome from "./Components/BtnBackHome";
import BtnComponents from "./Components/BtnComponents";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
    };

    handleChange = (e) => {
        const {target} = e;
        const {fields} = this.state;

        this.setState({
            fields: {
                ...fields,
                [target.name]: target.value,
            }
        });
    }

    submituserRegistrationForm = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["login"] = "";
            fields["password"] = "";
            this.setState({fields: fields});
        }
    }

    validateForm = (e) => {
        let fields = this.state.fields;
        let errors = {};
        /* eslint-disable no-unused-expressions */

        !fields["login"]
            ? errors["login"]="Пожалуйста, введите логин."
            : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')
            ? errors["login"]="Напишите правильный логин."
            : null;

        !fields["password"]
            ? errors["password"]="Пожалуйста, введите пароль."
            : !fields["password"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
            ? errors["password"]="Пароль слишком легкий."
            : null;

        this.setState({
                errors: errors
            }
        );

        return Object.keys(errors).length === 0 ? true : false;
    };

    resetForm = () => {
        this.setState({fields: {login: '', password: ''}});
    }

    render() {
        const {fields, errors} = this.state;
        return (
            <div className='login-container'>
                <form className="registrationForm" onSubmit={this.submituserRegistrationForm}>
                    <h1 className="registrationForm__title">Вход</h1>
                    <LoginComponent
                        text='Логин'
                        type='text'
                        placeholder='Логин'
                        value={this.state.fields.login}
                        onChange={this.handleChange}
                        name='login'
                        form='login'
                    />
                    <div className="errorMsg">{this.state.errors.login}</div>

                    <PasswordComponent
                        text='Пароль'
                        type='password'
                        value={this.state.fields.password}
                        onChange={this.handleChange}
                        name='password'
                        form='password'
                    />
                    <div className="errorMsg">{this.state.errors.password}</div>

                    <div className='d-flex justify-content-between mt-3'>
                        <BtnComponents
                            text="Сброс"
                            className='btn btn-outline-danger'
                            value='reset'
                            onClick={this.resetForm}
                        />

                        <Link to='main_page'>
                            <BtnComponents
                                text="Вход"
                                className='btn btn-outline-success'
                                value='submit'
                                type='submit'
                            />
                        </Link>

                    </div>
                </form>

                <div className='form group d-flex justify-content-center'>
                    <Link to='registration'>
                        <BtnBackHome
                            text='Я ж не зарегистрирован! Регистрация'
                            type='button'
                        />
                    </Link>
                </div>
            </div>
        );
    }
}
