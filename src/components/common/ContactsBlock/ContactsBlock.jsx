import React from 'react';
import './contactsBlock.scss';
import "../../../additions/icons/fontello/css/fontello.css";
import {NavLink} from "react-router-dom";


const ContactsBlock = ({telegram, gitHub, phoneNumber, mail, mailAddres}) => {
    return (
        <div className={"IconsBox"}>

            <a href={mailAddres}
                rel="noreferrer"
                target="_blank">
                <i className={"icon-mail-circled"}>{mail}</i>
            </a>


            <a href="https://web.telegram.org/#/login"
                rel="noreferrer"
                target="_blank">
                <i className={"icon-telegram"}>{telegram}</i>
            </a>


            <a href={gitHub}
                rel="noreferrer"
                target="_blank">
                <i className={"icon-github-circled"}>GitHub</i>
            </a>

            <NavLink to={'contacts'}>
                <i className={"icon-phone-circled"}>{phoneNumber}</i>
            </NavLink>

        </div>
    )
}

export default ContactsBlock;