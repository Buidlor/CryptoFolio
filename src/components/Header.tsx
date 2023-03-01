import React from "react";
import {FaSearch} from "react-icons/fa";

const Header =() => {
    return(
        <nav>
            <h1 className="text-5xl font-bold underline">CryptFolio</h1>
            <form action="post">
                <FaSearch />
                <input type="text" />
            </form>
            
        </nav>
    )
}

export default Header;