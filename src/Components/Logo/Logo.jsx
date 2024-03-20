import React from "react";
import './Logo.css';
import logo from "../../assets/icons/logo.png";

function Logo() {
    return(
        <div className="logo">
            <img src={logo} alt={""} className={"logo__img"} />
        </div>
    )
}
export default Logo