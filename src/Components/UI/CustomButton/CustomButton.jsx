import React from "react";
import './CustomButtom.css';

function CustomButton({styleTheme, text}) {
    return(
        <div style={{"display": "contents"}}>
            <button className={`main_button${styleTheme ? ` ${styleTheme}`: ""}`}>{text}</button>
        </div>
    )
}

export default CustomButton