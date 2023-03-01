import React from "react";
import {FaSearch} from "react-icons/fa";
import { FaBell } from "react-icons/fa";


const Header =() => {
    return(
        <nav className="flex gap-5 p-3 justify-between items-center border">
            <form action="post" className="flex ml-5">
                <h1 className="text-2xl font-bold mr-5">CryptFolio</h1>
                <input className="border p-1 px-5 rounded-full" type="text" placeholder="Search all assets"/>
                <button className="p-1 mx-1" type="submit">
                    <FaSearch />
                </button> 
            </form>
            <ul className="flex gap-5 mr-5">
                <li><button className="border-2 p-2 rounded-full px-3">Swap</button></li>
                <li><button className="border-2 p-2 rounded-full px-3 bg-blue-500 text-white">Connect Wallet</button></li>
                <li><button className="py-4"><FaBell /></button></li>
            </ul>
            
        </nav>
    )
}

export default Header;