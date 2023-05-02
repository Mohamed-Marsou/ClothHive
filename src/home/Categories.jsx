import React from "react";
import pic1 from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/ft1.webp"
import pic2 from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/images.jpeg"
import pic3 from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/download.jpeg"
const Categories = () => {
    const categoriesData = [
        {
            title: 'Editor pick',
            imgSrc: pic1
        },
        {
            title: 'SHOES',
            imgSrc: pic2
        },
        {
            title: 'ACCESSORIES',
            imgSrc: pic3
        }
    ];
    return <div id="categories">
        <div id="categories">
            {categoriesData.map((category, index) => (
                <div className="category" key={index}>
                    <img src={category.imgSrc} alt={category.title} />
                    <h3><a href="">{category.title}</a></h3>
                </div>
            ))}
        </div>
    </div>
}
export default Categories;