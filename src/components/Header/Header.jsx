import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

// import Search  from "./Search/Search"
// import Cart from "../Cart/Cart"
// import {Context} from "../../utils/context"

import "./Header.scss";
const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const handalScroll = () => {
        const offset = window.screenY
        if (offset > 200) {
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handalScroll)
    }, []) 

    return (
        <>
            {/* <header className={`main-header ${scrolled ? "sticky-header" : ""}`}> */}
            <header className="main-header">
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                
                    <div className="center">
                        ONE-CLICK STORE
                    </div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className="cart-icon">
                            <CgShoppingCart />
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
