import React from "react";
import "./InlineList.scss"

const InlineList = ({itemImage, itemImageAlt, itemLink, itemLinkName})=>{
    return (
        <div className={"ElementContainer"}>
            <div className={"ElementContainer__imageContainer"}>
                <a href={itemLink} rel="noreferrer" target="_blank"><img src={itemImage} alt={itemImageAlt}/></a>

            </div>
            <div className={"ElementContainer__linkContainer"}>
                <a href={itemLink} target="_blank" rel="noreferrer">{itemLinkName}</a>
            </div>
        </div>
    )
}
export default InlineList;