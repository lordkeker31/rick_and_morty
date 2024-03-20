import React from "react";
import './Category.css'
import charapters from "../../assets/charapters.jpg";

function Category({img, title, description}) { //dataArray
    return(
        <div className="category">
            <div className="category__image_container">
                <img src={img} alt=""/>
            </div>
            <div className="category__info_container">
                <h3 className="categiry__info_header">{title}</h3>
                <p className="category__info_description">{description}</p>
            </div>
        </div>
    )
}
export default Category