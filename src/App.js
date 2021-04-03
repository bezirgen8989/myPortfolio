import React from 'react';
import './App.scss'
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import RightBlock from "./components/RightBlock/RightBlock";
import LeftBlock from "./components/LeftBlock/LeftBlock";

const App = (props) =>{
    // debugger
    // console.log(props)
    return(
        <div className={'App'}>
            <Header />
            <RightBlock/>
            <LeftBlock/>
            <Wrapper
                homePageData={props.state.homePageData}
                portfolioPageData={props.state.portfolioPageData}
                resumePageData={props.state.resumePageData}
                reduxStore={props.reduxStore} />
            <Footer/>
        </div>
    )
}
export default App;