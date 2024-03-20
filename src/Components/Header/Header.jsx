import React from "react";
import logo from '../../assets/icons/logo.png';
import './Header.css';
import CustomButton from "../UI/CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header() {
    return(
        <header>
            <Logo />
            <Navigation />
            <div className={"user__container"}>
                <CustomButton text={"Регистрация"}/>
                <CustomButton text={"Войти"} styleTheme="dark"/>
            </div>
        </header>
    )
}
export default Header