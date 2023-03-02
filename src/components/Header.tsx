import React from "react";
import {FaSearch} from "react-icons/fa";
import { FaBell } from "react-icons/fa";


const Header =() => {
    return(
        <nav className="flex sm:gap-5 p-1 sm:p-3 justify-between items-center border h-16">
            <form action="post" className="flex sm:ml-5">
                <h1 className="text-xl sm:text-2xl font-bold mr-5">CryptoFolio</h1>
                <input className="text-xs sm:text-base border p-1 px-5 rounded-full shadow-md w-1/2" type="text" placeholder="Search all assets"/>
                <button className="p-1 mx-1 hidden sm:block" type="submit">
                    <FaSearch />
                </button> 
            </form>
            <ul className="flex justify-center items-center sm:gap-5 sm:mr-5">
                <li><button className="border p-2 rounded-full px-3 shadow-md hidden sm:block">Swap</button></li>
                <li><button className="text-xs sm:text-base p-1 sm:p-2 rounded-full px-3 bg-blue-500 text-white border-blue shadow-md truncate w-20 sm:w-36">Connect Wallet</button></li>
                <li><button className="py-4 hidden sm:block"><FaBell /></button></li>
            </ul>
            
        </nav>
    )
}

export default Header;