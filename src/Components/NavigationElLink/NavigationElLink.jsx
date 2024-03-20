import React from "react";
import './NavigationElLink.css';

function NavigationElLink({text, href}) {
    if (!href) href = "#";
    return(
        <li className={"main_navigation__item"}>
            <a className={"main_navigation__link"} href={href}>{text}</a>
        </li>
    )
}

export default NavigationElLink