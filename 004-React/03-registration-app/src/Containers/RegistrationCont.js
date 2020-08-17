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
import {connect} from "react-redux";
import {setErrors, setField, setLoggedIn, clearForm} from "../Components/redux/actions/login";

class RegistrationCont extends React.Component {
    constructor(props) {
        // super();
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    };

    // handleChange = (e) => {
    //     const {target} = e;
    //     const {fields} = this.state;
    //     this.setState({
    //         fields: {
    //             ...fields,
    //             [target.name]: target.value,
    //         }
    //     });
    // }

     handleChange = ({target}) => {
        this.props.setField(target)
      };

    // submituserRegistrationForm = (e) => {
    //     e.preventDefault();
    //     if (this.validateForm()) {
    //         let fields = {
    //             username: '',
    //             email: '',
    //             surname: '',
    //             login: '',
    //             password: ''
    //         };
    //         this.setState({fields: fields});
    //     }
    // }

    submituserRegistrationForm = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            let fields = {
                username: '',
                email: '',
                surname: '',
                login: '',
                password:'' };
            this.props.setLoggedIn(fields);
        } else {
            this.props.setErrors(errors);
        }
    };

    validateForm = () => {
        // let fields = this.state.fields;
        let fields = this.props.fields;
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

        // this.setState({
        //         errors: errors
        //     }
        // );

        // return Object.keys(errors).length === 0 ? true : false;
         return errors;
    };

    // resetForm = () => {
    //     this.setState({fields: {
    //         username: "",
    //             surname: "",
    //             email: "",
    //             login: "",
    //             password: ""
    //     }});
    // }

    resetForm = () => {
        this.props.clearForm({
            username: "",
            surname: "",
            email: "",
            login: "",
            password: ""
        });
    };

    render() {
        // const {fields, errors} = this.state;
        const {fields, errors} = this.props;
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
                                //value={this.state.fields.username}
                                value={fields.username}
                                name='username'
                                form='username'
                                onChange={this.handleChange}
                                // required
                            />
                            {/*<div className="errorMsg">{this.state.errors.username}</div>*/}
                            <div className="text-danger  errorMsg">{errors.username}</div>
                        </div>
                        <div>
                            <NameComponent
                                className="registrationField__input"
                                text='Фамилия'
                                type='text'
                                placeholder='Фамилия'
                                // value={this.state.fields.surname}
                                value={fields.surname}
                                name='surname'
                                form='surname'
                                onChange={this.handleChange}
                                // required
                            />
                            {/*<div className="errorMsg">{this.state.errors.surname}</div>*/}
                            <div className="text-danger  errorMsg">{errors.surname}</div>
                        </div>
                    </div>
                    <EmaileComponent
                        text='Email'
                        name='email'
                        type='text'
                        placeholder='example@email.com'
                        value={fields.email}
                        onChange={this.handleChange}
                        form='email'
                    />
                    {/*<div className="errorMsg">{this.state.errors.email}</div>*/}
                    <div className="text-danger  errorMsg">{errors.email}</div>

                    <LoginComponent
                        text='Логин'
                        type='text'
                        placeholder='Логин'
                        value={fields.login}
                        onChange={this.handleChange}
                        name='login'
                        form='login'
                    />
                    {/*<div className="errorMsg">{this.state.errors.login}</div>*/}
                    <div className="text-danger  errorMsg">{errors.login}</div>
                    <PasswordComponent
                        text='Пароль'
                        type='password'
                        value={fields.password}
                        onChange={this.handleChange}
                        name='password'
                        form='password'
                    />
                    {/*<div className="errorMsg">{this.state.errors.password}</div>*/}
                    <div className="text-danger  errorMsg">{errors.password}</div>
                    <div className='d-flex justify-content-between mt-3'>
                        <BtnComponents
                            className='btn btn-outline-danger'
                            text="Сброс"
                            // value='reset'
                            onClick={this.resetForm}
                        />
                        <BtnComponents
                            className='btn btn-outline-success btn_active'
                            text="Регистрация"
                            // value='submit'
                            // type='submit'
                            onSubmit= {this.submituserRegistrationForm}
                        />
                    </div>
                </form>

                <div className='form group d-flex justify-content-center'>
                    <Link to='login'>
                        <BtnLogin
                            text='Уже есть аккаунт? Вход'
                            type='button'
                        />
                    </Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({ ...state.login });

export default connect(mapStateToProps, { setErrors, setField, setLoggedIn, clearForm })(RegistrationCont)
