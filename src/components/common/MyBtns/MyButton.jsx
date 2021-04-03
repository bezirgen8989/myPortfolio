import React from "react";
import './myButton.scss'
import {NavLink} from "react-router-dom";

const MyBtn = (props)=>{
    return(
        <button className={'MyBtn'}>
            <NavLink to={props.link} activeClassName={'active'}>{props.btnName}</NavLink>
        </button>
    )
}

export default MyBtn;