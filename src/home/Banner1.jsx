import React from 'react';
import Banner from "../../../../../Desktop/e-comReactjs/E-commerce/src/assets/banner-1.webp"

const Banner1=()=>{
    return <section id='banner1'>
        <img src={Banner} alt="Banner" />
        <div className="banner-btn">
            <h2>
                METROPOLIS
            </h2>
            <p>Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous</p>
            <a href="">
                SHOP NOW
            </a>
        </div>
    </section>
}
export default Banner1;