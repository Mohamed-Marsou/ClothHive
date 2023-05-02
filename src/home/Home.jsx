import React from "react";
import NavBar from "../../../../../Desktop/e-comReactjs/E-commerce/src/NavBar";
import Banner1 from "./Banner1";
import Featured from "./Featured";
import Hero from "./Hero";
import Products from "./Products";
import Categories from "./Categories";
import Footer from "../../../../../Desktop/e-comReactjs/E-commerce/src/Footer";
const Home=()=>{
    return <>
    <NavBar/>
    <Hero/>
    <Categories/>
    <Products/>
    <Banner1/>
    <Featured/>
    <Footer/>
    </>
}
export default Home;