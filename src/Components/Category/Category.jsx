import React from "react";
import './Category.css'

function Category({img, title, description, id}) { //dataArray
    return(
        <div className="category" id={id}>
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