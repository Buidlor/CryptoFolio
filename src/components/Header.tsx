import React from "react";
import {FaSearch} from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDisconnect } from "wagmi";
import { useState, useEffect } from "react";



const Header =({session, handleSearch, handleSubmit}) => {
    const { disconnectAsync } = useDisconnect();
    const navigate = useNavigate();
    const [walletButton, setWalletButton] = useState("Wallet");
    

    useEffect(() => {
        setWalletButton(session ? session.address.slice(0,5) + "..." +session.address.slice(-5) : "Wallet");
    }, [session]); 



    async function signOut() {
        await disconnectAsync();
        await axios("http://localhost:3000/logout", {
            withCredentials: true,
        })
       
        navigate("/");
    }
   
    return(
        <nav className="flex sm:gap-5 p-1 sm:p-3 justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white  h-16 shadow-md">
            <form action="post" className="flex sm:ml-5">
                <h1 className="text-xl sm:text-2xl font-bold mr-5">CryptoFolio</h1>
                <input className="text-xs sm:text-base border p-1 px-5 rounded-full shadow-md w-96 text-black" type="text" onChange={handleSearch} id="handleSearch" placeholder="Search address"/>
                <button className="p-1 mx-1 hidden sm:block" type="submit" onClick={handleSubmit}>
                    <FaSearch />
                </button> 
            </form>
            <ul className="flex justify-center items-center sm:gap-5 sm:mr-5">
                <li><button className="border p-2 rounded-full px-3 shadow-md hidden sm:block">Swap</button></li>
                <li><button className="text-xs sm:text-base p-1 sm:p-2 rounded-full px-3 bg-blue-500 text-white border-blue shadow-md truncate w-20 sm:w-36" onClick={signOut}>{walletButton}</button></li>
                <li><button className="py-4 hidden sm:block"><FaBell /></button></li>
            </ul>
            
        </nav>
    )
}

export default Header;