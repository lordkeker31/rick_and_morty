import React from "react";
import './Header.css';
import CustomButton from "../UI/CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import navigation_links from "../../data/local/navigation_links";

function Header() {
    return(
        <header>
            <Logo />
            <Navigation dataArr={navigation_links}/>
            <div className={"user__container"}>
                <CustomButton text={"Регистрация"}/>
                <CustomButton text={"Войти"} styleTheme="dark"/>
            </div>
        </header>
    )
}
export default Header