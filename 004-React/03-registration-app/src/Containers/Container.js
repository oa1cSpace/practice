import React from 'react';
import '../App.css';
import HeaderComponent from "../Components/HeaderComponent";
import EmaileComponent from "../Components/EmaileComponent";
import PasswordComponent from "../Components/PasswordComponent";
import LoginComponent from "../Components/LoginComponent";
import NameComponent from "../Components/NameComponent";
import BtnComponent from "../Components/BtnComponent";
import {Link} from "react-router-dom";
import BtnLogin from "../Components/BtnLogin";

class Container extends React.Component {
    render() {
        return (
            <div>
                <form className="registrationForm" action="index.html">

                    <HeaderComponent
                        className="registrationForm__title"
                        title='Регистрация'
                    />

                    <NameComponent
                        fName='Имя'
                        lName='Фамилия'
                        type='text'
                        patternName='^[A-Za-zА-Яа-яЁё]{4,60}'
                        placeholderFName="Имя"
                        placeholderLName="Фамилия"
                    />

                    <EmaileComponent
                        name='Email'
                        type='email'
                        patternEmail='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        placeholder='example@email.com'
                    />

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
                        textBtn1='Регистрация'
                        typeBtn1='submit'

                        textBtn2='Сброс'
                        typeBtn2='reset'
                    />
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

export default Container;