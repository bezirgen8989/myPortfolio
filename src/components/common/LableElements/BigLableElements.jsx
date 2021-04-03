import React from "react";
import "./LableElements.scss"

const BigLableElements = ({bigLableText="Введите bigLableText"}) => {
    return (
        <h3 className={'BigLableElements'}>{bigLableText}</h3>
    )
}

export default BigLableElements;