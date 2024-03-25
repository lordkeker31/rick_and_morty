import React from "react";
import './Category.css'
import { Link } from "react-router-dom";

function Category({img, title, description, id, href}) { //dataArray
    return(
        <Link to={href} className="category" key={id}>
            <div className="category__image_container">
                <img src={img} alt=""/>
            </div>
            <div className="category__info_container">
                <h3 className="categiry__info_header">{title}</h3>
                <p className="category__info_description">{description}</p>
            </div>
        </Link>
    )
}
export default Category