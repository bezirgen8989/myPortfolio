import React from 'react';
import MyBtn from "../common/MyBtns/MyButton";
import './header.scss';
import MyLogo from "../common/MyLogo/MyLogo";

const Header = ()=>{
    return(
        <header className={'Header'}>
            <nav className={'Header__navMenu'}>
                <MyBtn link={'home'} btnName={'Home'}/>
                <MyBtn link={'resume'} btnName={'Resume'}/>
                <MyBtn link={'portfolio'} btnName={'Portfolio'}/>
                <MyBtn link={'contacts'} btnName={'Contacts'}/>
            </nav>
            <MyLogo/>
        </header>
    )
}
export default Header;