import React from 'react';
import './contacts.scss';
import ContactsBlock from "../../common/ContactsBlock/ContactsBlock";

const Contacts = () => {
    return (
        <div className={'ContactsBox'}>
            <ContactsBlock
                gitHub={'https://github.com/bezirgen8989'}
                telegram={'@musya1189'}
                mail={'bezirgenmusayew@gmail.com'}
                mailAddres={'https://mail.google.com/'}
                phoneNumber={'+375(25)767-70-72'}
            />
        </div>
    )
}

export default Contacts;