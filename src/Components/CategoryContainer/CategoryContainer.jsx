import React from "react";
import './CategoryContainer.css';
import Category from "../Category/Category";

function CategoryContainer({dataArr}) {
    return(
        <div className="category_container">
            {dataArr.map((el) => {
                return(
                    <Category img={el.image} title={el.title} description={el.description} key={el.id} />
                );
            })}
        </div>
    );
}

export default CategoryContainer