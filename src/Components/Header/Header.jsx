import React from "react";
import logo from '../../assets/icons/logo.png';
import './Header.css';
import CustomButton from "../UI/CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";

function Header() {
    return(
        <header>
            <img src={logo} alt={""} className={"logo__img"} />
            <Navigation />
            <div className={"user__container"}>
                <CustomButton text={"Регистрация"}/>
                <CustomButton text={"Войти"} styleTheme="dark"/>
            </div>
        </header>
    )
}
export default Header