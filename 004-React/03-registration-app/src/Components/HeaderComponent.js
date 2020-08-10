import React from 'react';

import PComponent from "./PComponent";

class HeaderComponent extends React.Component {
    render() {

        const title = this.props.title;
        const className = this.props.className;

        return (
            <div>
                <h1 className={className}>{title}</h1>
                <PComponent className='registrationForm__text' text='Для регистрации укажите Ваши данные. Все текстовые поля обязательны для заполнения'/>
            </div>
        );
    }
}

export default HeaderComponent;