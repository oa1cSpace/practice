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

const initialState = {
    login: "",
    password: "",
    loginError: "",
    passwordError: ""
};

export default class Login extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         fields: {},
    //         errors: {}
    //     }
    // };

    state = initialState;

    handleChange = (e) => {
        const {target} = e;
        // const {fields} = this.state;

        this.setState({
            // fields: {
            //     ...fields,
            //     [target.name]: target.value,
            // }
            [target.name]: target.value
        });
    };

    // submituserRegistrationForm = (e) => {
    //     e.preventDefault();
    //     if (this.validateForm()) {
    //         let fields = {};
    //         fields["login"] = "";
    //         fields["password"] = "";
    //         this.setState({fields: fields});
    //     }
    // }

    // validateForm = (e) => {
    //     let fields = this.state.fields;
    //     let errors = {};
    //     /* eslint-disable no-unused-expressions */
    //
    //     !fields["login"]
    //         ? errors["login"] = "Пожалуйста, введите логин."
    //         : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')
    //         ? errors["login"] = "Напишите правильный логин."
    //         : null;
    //
    //     !fields["password"]
    //         ? errors["password"] = "Пожалуйста, введите пароль."
    //         : !fields["password"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
    //         ? errors["password"] = "Пароль слишком легкий."
    //         : null;
    //
    //     this.setState({
    //             errors: errors
    //         }
    //     );
    //
    //     return Object.keys(errors).length === 0 ? true : false;
    // };

    // resetForm = () => {
    //     this.setState({fields: {login: '', password: ''}});
    // }

    validate = () => {
        let loginError = "";
        let passwordError = "";

        const reLogin = new RegExp("^[A-Za-zА-Яа-яЁё]{4,60}");

        if (!reLogin.test(this.state.login)) {
            loginError = "Логин может быть от 4 до 60 букв. Символы и цифры запрещены.";
        }

        if (this.state.password.length < 6) {
            passwordError = "Слишком короткий пароль. Пароль должен быть от 6 символов.";
        }

        if (loginError || passwordError) {
            this.setState({passwordError, loginError});
            return false;
        }

        return true;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let isValid = this.validate();
        if (isValid) {
            this.setState(initialState);
        }
    };

    render() {
        // const {fields, errors} = this.state;
        console.log('state', this.state);
        return (
            <div className='login-container'>
                <form className="registrationForm"
                      onSubmit={this.handleSubmit}>
                    <h1 className="registrationForm__title">Вход</h1>
                    <LoginComponent
                        text='Логин'
                        type='text'
                        placeholder='Логин'
                        // value={this.state.fields.login}
                        value={this.state.login}
                        onChange={this.handleChange}
                        name='login'
                        form='login'
                    />
                    {/*<div className="errorMsg">{this.state.errors.login}</div>*/}
                    <div class="text-danger">{this.state.loginError}</div>
                    <PasswordComponent
                        text='Пароль'
                        type='password'
                        // value={this.state.fields.password}
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                        form='password'
                    />
                    {/*<div className="errorMsg">{this.state.errors.password}</div>*/}
                    <div className="text-danger">{this.state.passwordError}</div>
                    <div className='d-flex justify-content-between mt-3'>
                        <BtnComponents
                            text="Сброс"
                            className='btn btn-outline-danger btn_active'
                            value='reset'
                            // onClick={this.resetForm}
                        />

                        <Link to='home'>
                            <BtnComponents
                                text="Вход"
                                className='btn btn-outline-success btn_active'
                                // value='submit'
                                // type='submit'
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
