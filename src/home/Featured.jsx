import React from "react";
import { Title } from "./Products"
import picf1 from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/f1.webp"
import picf2 from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/f2.webp"
import picf3 from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/f3.webp"
const Featured=()=>{
    return <>
    <Title title="Features" />
    <section id="featured">
        <div className="Card">
            <img src={picf1} alt="" />
            <h3>
                <a href="">
                    Lorem ipsum dolor
                </a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, minima!</p>
            <a href="">SHOP NOW</a>
        </div>
        <div className="Card">
        <img src={picf2} alt="" />
        <h3>
                <a href="">
                    Lorem ipsum dolor
                </a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, minima!</p>
            <a href="">SHOP NOW</a>
        </div>
        <div className="Card">
        <img src={picf3} alt="" />
        <h3>
                <a href="">
                    Lorem ipsum dolor
                </a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, minima!</p>
            <a href="">SHOP NOW</a>
        </div>
    </section>
    </>
}
export default Featured;