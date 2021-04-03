import React from "react";
import "./LableElements.scss"

const LableElements = ({lableInfo="Введите lableInfo", infoSpan="Введите infoSpan"}) => {
    return (
        <div className={"FormBlock"}>
            <span className={"FormBlock__lableSpan"}>{lableInfo}:
                <span className={"FormBlock__infoSpan"}> &nbsp;{infoSpan}</span>
            </span>
        </div>
    )
}

export default LableElements;