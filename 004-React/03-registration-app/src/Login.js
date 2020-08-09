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
        e.stopPropagation();
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        /*if (!fields["login"]) {
          /!*  formIsValid = false;*!/
            errors["login"] = "*Введите логин.";
        } else if (typeof fields["login"] !== "undefined") {
            if (!fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')) {
               /!* formIsValid = false;*!/
                errors["login"] = "*Неверный логин";
            }
        }*/

        !fields["login"] ? errors["login"]="*Введите логин." : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}') ? errors["login"]="*Неверный логин" : formIsValid=false;
        !fields["password"] ? errors["password"]="*Введите пароль." : !fields["password"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}') ? errors["password"]="*Пароль слишком прост, угроза компроментации." : formIsValid=false;

        /*if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Введите пароль.";
        } else if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')) {
                formIsValid = false;
                errors["password"] = "*Пароль слишком прост, угроза компроментации.";
            }
        }*/
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    resetForm = () => {
        this.setState({fields: {login: '', password: ''}});
    }

    render() {
        const {fields, errors} = this.state;
        return (
            <div>
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

                        <BtnComponents
                            text="Вход"
                            className='btn btn-outline-success'
                            value='submit'
                            type='submit'
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
