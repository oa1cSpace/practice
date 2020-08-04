import React from 'react';
import '../App.css';
import HeaderComponent from "../Components/HeaderComponent";
import EmaileComponent from "../Components/EmaileComponent";
import PasswordComponent from "../Components/PasswordComponent";
import LoginComponent from "../Components/LoginComponent";
import NameComponent from "../Components/NameComponent";
import BtnComponent from "../Components/BtnComponent";

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
                        placeholder1="Имя"
                        placeholder2="Фамилия"
                    />


                    <EmaileComponent
                        name='Email'
                        type='email'
                        placeholder='example@email.com'
                    />


                    <LoginComponent
                        name='Логин'
                        type='text'
                        placeholder='Логин'
                    />


                    <PasswordComponent
                        name='Пароль'
                        type='password'
                    />

                    <BtnComponent
                        textBtn1='Регистрация'
                        textBtn2='Сброс'
                        typeBtn1='submit'
                        typeBtn2='reset'
                    />

                </form>
            </div>
        );
    }
}

export default Container;