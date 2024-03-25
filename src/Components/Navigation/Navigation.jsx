import React from "react";
import './Navigation.css';
import NavigationElLink from "../NavigationElLink/NavigationElLink";

function Navigation({dataArr}) {
    return(
        <nav className={"main_navigation"}>
            {dataArr.map((el) => {
                return(
                    <NavigationElLink text={el.text} href={el.href} key={el.id}/>
                )
             })}
        </nav>
    )
}
export default Navigation