import React from "react";
import "./preloader.scss";
import "../../../additions/icons/fontello/css/fontello.css";

const Preloader = ()=>{
    return(
        <div className={"iconPreloader"}>
            <i className={"icon-spin4 animate-spin"}></i>
        </div>
    );
};

export default Preloader;