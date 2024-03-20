import React from "react";
import './Category.css'
import charapters from "../../assets/charapters.jpg";

function Category({img, descriptionHeader, descriptionBody}) {
    return(
        <div className="category">
            <div className="category__image_container">
                <img src={img} alt=""/>
            </div>
            <div className="category__info_container">
                <h3 className="categiry__info_header">{descriptionHeader}</h3>
                <p className="category__info_description">{descriptionBody}</p>
            </div>
        </div>
    )
}
export default Category