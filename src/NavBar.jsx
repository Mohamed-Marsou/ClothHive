import React, { useState } from 'react';
import './App.css'
import UsaPic from "./assets/icons8-usa-48.png"
import FrancePic from "./assets/icons8-france-48.png"
import MarPic from "./assets/icons8-morocco-48.png"
const NavBar=()=>{
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
      }
    return <nav>
        <div className="lang_search_container">
            <p>Customer Service 091 234-Cloth Hive</p>
            <div className={`custom-select ${isOpen ? 'select-open' : ''}`}>
                <div className="select-items">
                    <div className="select-item" data-value="en">
                        <img src={UsaPic} alt="morocco" />
                        <a href="#">EN</a>
                    </div>
                    <div className="select-item " data-value="fr">
                        <img src={FrancePic} alt="morocco" />
                        <a href="#">FR</a>
                    </div>
                    <div className="select-item " data-value="ar">
                        <img src={MarPic} alt="morocco" />
                        <a href="#">AR</a>
                    </div>
                </div>
                <i id="langDropDown" className="fa-solid fa-chevron-down" onClick={toggleMenu}></i>
            </div>
            <form action="#" className="searchProduct">
                <div className="inptContainer">
                    <input type="search" name="searchForProducts" placeholder="Search"/>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </div>
        <div className="logo_actions">
            <h1>
                <a href="#">
                ClothHive
                </a>
            </h1>
            <ul>
                <li>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <a href="">Shopping Cart</a>
                    <span>0</span>
                </li>
                <li>
                    <i className="fa-solid fa-bookmark"></i>
                    <a href="">
                    Wish List</a>
                    </li>
                <li className='userAction'>
                    <a href="">Login</a>
                    <p>Or</p>
                    <a href="">Create an Account</a>
                </li>
            </ul>
        </div>
        <div className="NacLinks">
            <div className="Hamburger">
                <div className="Ham"></div>
                <div className="Ham"></div>
                <div className="Ham"></div>
            </div>
            <h1 className='logo-link'>
                <a href="#">
                ClothHive
                </a>
            </h1>
            <ul className='links'>
                <li>
                    <a href="">SHOP</a>
                </li>
                <li>
                    <a href="">PRODUCTS</a>
                </li>
                <li>
                    <a href="">BLOG</a>
                </li>
                <li>
                    <a href="">NEW IN</a>
                </li>
                <li>
                    <a href="">COLLECTIONS</a>
                </li>
            </ul>

            <ul className='responsiveNav'>
                <li>
                    <a href="">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>0</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-user"></i>
                    </a>
                </li>
                <li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </li>
            </ul>
        </div>
    </nav>

}
export default NavBar;