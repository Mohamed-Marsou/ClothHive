import React from "react";
import HeroPic from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/slideshow-1.webp"
const Hero=()=>{
    return <section id="hero">
                <img src={HeroPic} alt="" />
                <div className="T-B-container">
                    <h3>COSMOPOLIS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, expedita</p>
                    <a href="">SHOP NOW</a>
                </div>
            </section>
}
export default Hero;