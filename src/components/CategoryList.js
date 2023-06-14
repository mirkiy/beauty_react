import React from "react";

const CategoryList = ({category}) => {

    const handleClick = () => {
        console.log(`Clicked on ${category}`)
    }
    return (
        <li onClick={handleClick}>{category.category}</li>
    )
}
export default CategoryList;