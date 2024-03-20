import React from "react";
import './Navigation.css';
import NavigationElLink from "../NavigationElLink/NavigationElLink";

function Navigation() {
    return(
        <nav className={"main_navigation"}>
            <NavigationElLink text="Главная" href="#"/>
            <NavigationElLink text="О проекте" href="#"/>
        </nav>
    )
}
export default Navigation