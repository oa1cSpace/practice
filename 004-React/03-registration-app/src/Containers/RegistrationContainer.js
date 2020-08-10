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
            let fields = {
                username: '',
                email: '',
                surname: '',
                login: '',
                password: ''
            };
            this.setState({fields: fields});
        }
    }

    validateForm = (e) => {
        let fields = this.state.fields;
        let errors = {};
        /* eslint-disable no-unused-expressions */
        !fields["username"]
            ? errors["username"] = "Пожалуйста, введите имя."
            : !fields["username"].match('^[A-Za-zА-Яа-яЁё]{2,60}')
            ? errors["username"] = "Имя может содержать только буквы."
            : null;

        !fields.surname
            ? errors["surname"] = "Пожалуйста, введите фамилию."
            : !fields["surname"].match('^[A-Za-zА-Яа-яЁё]{2,60}')
            ? errors["surname"] = "Фамилия может содержать только буквы."
            : null;

        !fields["email"]
            ? errors["email"] = "Пожалуйста, введите e-mail."
            : !fields["email"].match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ? errors["email"] = "Напишите правильный e-mail."
            : null;

        !fields["login"]
            ? errors["login"] = "Пожалуйста, введите логин."
            : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')
            ? errors["login"] = "Напишите правильный логин."
            : null;

        !fields["password"]
            ? errors["password"] = "Пожалуйста, введите пароль."
            : !fields["password"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
            ? errors["password"] = "Пароль слишком легкий."
            : null;

        this.setState({
                errors: errors
            }
        );

        return Object.keys(errors).length === 0 ? true : false;
    };

    resetForm = () => {
        this.setState({fields: {username: "", surname: "", email: "", login: "", password: ""}});
    }

    render() {
        const {fields, errors} = this.state;
        return (
            <div className='registration-container'>
                <form className="registrationForm"
                      name="userRegistrationForm"
                      onSubmit={this.submituserRegistrationForm}>
                    <HeaderComponent
                        className="registrationForm__title"
                        title='Регистрация'
                    />
                    <div className=" d-flex clm-2 justify-content-between">
                        <div>
                            <NameComponent
                                text='Имя'
                                type='text'
                                className="registrationField__input"
                                placeholder='Имя'
                                onChange={this.handleChange}
                                value={this.state.fields.username}
                                name='username'
                                form='username'
                                required
                            />
                            <div className="errorMsg">{this.state.errors.username}</div>
                        </div>
                        <div>
                            <NameComponent
                                text='Фамилия'
                                type='text'
                                className="registrationField__input"
                                placeholder='Фамилия'
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
                        text='Email'
                        name='Email'
                        type='email'
                        placeholder='example@email.com'
                        value={this.state.fields.email}
                        onChange={this.handleChange}
                        form='email'
                    />
                    <div className="errorMsg">{this.state.errors.email}</div>
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
                            text="Регистрация"
                            className='btn btn-outline-success'
                            value='submit'
                            type='submit'
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
