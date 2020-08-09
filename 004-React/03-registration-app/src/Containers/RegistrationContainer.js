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

       /* if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Введите имя.";
        } else if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match('^[A-Za-zА-Яа-яЁё]{2,60}')) {
                formIsValid = false;
                errors["name"] = "*Неверное имя.";
            }
        }*/
        !fields["name"] ? errors["name"]="*Введите имя." : !fields["name"].match('^[A-Za-zА-Яа-яЁё]{2,60}') ? errors["name"]="*Неверное имя." : formIsValid=false;

        /*if (!fields["surname"]) {
            formIsValid = false;
            errors["surname"] = "*Введите фамилию.";
        } else if (typeof fields["surname"] !== "undefined") {
            if (!fields["surname"].match('^[A-Za-zА-Яа-яЁё]{2,60}')) {
                formIsValid = false;
                errors["surname"] = "*Неверная фамилия.";
            }
        }*/
        !fields["surname"] ? errors["surname"]="*Введите фамилию." : !fields["surname"].match('^[A-Za-zА-Яа-яЁё]{2,60}') ? errors["surname"]="*Неверная фамилия." : formIsValid=false;

        /*if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Введите e-mail.";
        } else if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            let pattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Введите валидный e-mail.";
            }
        }*/
        !fields["email"] ? errors["email"]="*Введите e-mail." : !fields["email"].match('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ? errors["email"]="*Введите валидный e-mail." : formIsValid=false;

        /* if (!fields["login"]) {
             formIsValid = false;
             errors["login"] = "*Введите логин.";
         } else if (typeof fields["login"] !== "undefined") {
             if (!fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')) {
                 formIsValid = false;
                 errors["login"] = "*Неверный логин";
             }
         }*/
        !fields["login"] ? errors["login"]="*Введите логин." : !fields["login"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}') ? errors["login"]="*Неверный логин" : formIsValid=false;

        /*if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Введите пароль.";
        } else if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}')) {
                formIsValid = false;
                errors["password"] = "*Введите сложный пароль.";
            }
        }*/
        !fields["password"] ? errors["password"]="*Введите пароль." : !fields["password"].match('^[A-Za-zА-Яа-яЁё0-9]{4,60}') ? errors["password"]="*Пароль слишком прост, угроза компроментации." : formIsValid=false;

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    resetForm = () => {
        this.setState({fields: {name: "", surname: "", email: "", login: "", password: ""}});
    }

    render() {
        const {fields, errors} = this.state;
        return (
            <div>
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
                               /* pattern='^[A-Za-zА-Яа-яЁё]{2,60}'*/
                                placeholder='Имя'
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
                                text='Фамилия'
                                type='text'
                                className="registrationField__input"
                                /*pattern='^[A-Za-zА-Яа-яЁё]{2,60}'*/
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
