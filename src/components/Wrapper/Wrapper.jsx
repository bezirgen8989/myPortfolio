import React from 'react';
import './wrapper.scss';
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import {Route} from "react-router-dom";

const Wrapper = ({homePageData, reduxStore, resumePageData, portfolioPageData})=>{
    // console.log(resumePageData)
    // debugger
    return(
        <div className={'Wrapper'}>
            <Route path={'/home'} render={()=><Home
                homePageData={homePageData}
                reduxStore={reduxStore}
            />} />
            <Route path={'/resume'} render={()=><Resume
                resumePageData={resumePageData}
                reduxStore = {reduxStore}
            />} />
            <Route path={'/portfolio'} render={()=><Portfolio
                portfolioPageData={portfolioPageData}/>} />
            <Route path={'/contacts'} render={()=><Contacts/>} />
        </div>
    )
}

export default Wrapper;