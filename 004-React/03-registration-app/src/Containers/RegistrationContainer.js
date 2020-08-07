import React from 'react';
import '../App.css';
import HeaderComponent from "../Components/HeaderComponent";
import EmaileComponent from "../Components/EmaileComponent";
import PasswordComponent from "../Components/PasswordComponent";
import LoginComponent from "../Components/LoginComponent";
import NameComponent from "../Components/NameComponent";
import BtnComponents from "../Components/BtnComponents";
import {Link} from "react-router-dom";
import BtnLogin from "../Components/BtnLogin";

export default class RegistrationContainer extends React.Component {
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
            fields["name"] = "";
            fields["surname"] = "";
            fields["email"] = "";
            fields["login"] = "";
            fields["password"] = "";
            this.setState({fields: fields});
        }
    }
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Введите имя.";
        } else if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Неверное имя.";
            }
        }

        if (!fields["surname"]) {
            formIsValid = false;
            errors["surname"] = "*Введите фамилию.";
        } else if (typeof fields["surname"] !== "undefined") {
            if (!fields["surname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["surname"] = "*Неверная фамилия.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Введите e-mail.";
        } else if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Введите валидный e-mail.";
            }
        }

        if (!fields["login"]) {
            formIsValid = false;
            errors["login"] = "*Введите логин.";
        } else if (typeof fields["login"] !== "undefined") {
            if (!fields["login"].match(/^[a-zA-Z0-9]*$/)) {
                formIsValid = false;
                errors["login"] = "*Неверный логин";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Введите пароль.";
        } else if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
                formIsValid = false;
                errors["password"] = "*Введите сложный пароль.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        const {fields, errors} = this.state;
        return (
            <div>
                <form className="registrationForm" name="userRegistrationForm"
                      onSubmit={this.submituserRegistrationForm}>
                    <HeaderComponent
                        className="registrationForm__title"
                        title='Регистрация'
                    />

                    <div className=" d-flex clm-2 justify-content-between">
                        <div>
                            <NameComponent
                                fName='Имя'
                                type='text'
                                className="registrationField__input"
                                patternName='^[A-Za-zА-Яа-яЁё]{4,60}'
                                placeholderName='Имя'
                                onChange={this.handleChange}
                                value={this.state.fields.name}
                                name='name'
                                form='name'
                                required
                            />
                            <div className="errorMsg">{this.state.errors.name}</div>
                        </div>
                        <div>
                            <NameComponent
                                fName='Фамилия'
                                type='text'
                                className="registrationField__input"
                                patternName='^[A-Za-zА-Яа-яЁё]{4,60}'
                                placeholderName='Фамилия'
                                onChange={this.handleChange}
                                value={this.state.fields.surname}
                                name='surname'
                                form='surname'
                                required
                            />
                            <div className="errorMsg">{this.state.errors.surname}</div>
                        </div>
                    </div>

                    <EmaileComponent
                        name='Email'
                        type='email'
                        placeholder='example@email.com'
                        value={this.state.fields.email}
                        onChange={this.handleChange}
                        form='email'
                    />
                    <div className="errorMsg">{this.state.errors.email}</div>

                    <LoginComponent
                        name='Логин'
                        type='text'
                        placeholder='Логин'
                        value={this.state.fields.login}
                        onChange={this.handleChange}
                        form='login'
                    />
                    <div className="errorMsg">{this.state.errors.login}</div>

                    <PasswordComponent
                        name='Пароль'
                        type='password'
                        value={this.state.fields.password}
                        onChange={this.handleChange}
                        form='password'
                    />
                    <div className="errorMsg">{this.state.errors.password}</div>

                    <div className='d-flex justify-content-between mt-3'>
                        <BtnComponents
                            textBtn="Сброс"
                            className='btn btn-outline-danger'
                            type='button'
                            onClick={this.resetForm}
                        />

                        <BtnComponents
                            textBtn="Регистрация"
                            className='btn btn-outline-success'
                            type='button'
                        />
                    </div>
                </form>

                <div className='form group d-flex justify-content-center'>
                    <Link to='login'>
                        <BtnLogin
                            textBtnLogin='Уже есть аккаунт? Вход'
                            typeBtnLogin='button'
                        />
                    </Link>
                </div>
            </div>
        );
    }
}
