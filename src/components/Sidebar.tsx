import { FaWallet } from "react-icons/fa";
import { useState, useEffect } from "react";

//session.address.slice(0,5) +"..." +session.address.slice(-5)
const Sidebar = ({session}) => {

    const [walletButton, setWalletButton] = useState("Wallet");

    useEffect(() => {
        setWalletButton(session ? session.address.slice(0,5) + "..." +session.address.slice(-5) : "Wallet");
    }, [session]); 

    return(
        <div className="sidebar bg-gray-800 text-white w-1/6 h-screen shadow-md" style={{height: "calc(100vh - 4rem)"}}> 
            <div className="sidebar border-b p-5 flex items-center gap-5">
                <img src="./src/assets/metamask-icon-scaled.png" alt="mm fox" className="w-1/6"/>
                <div>
                    <h1 className="text-xl font-bold pt-2">Wallet</h1>
                    <p className=" pb-2">$ Value here</p>
                </div>
            </div>
            <ul className="p-5">
                <li>Market</li>
                <li>Pools</li>
            </ul>
            <h1 className="text-lg font-bold px-2 ">Account</h1>
            <ul className="mx-5">
                <li className="flex items-center gap-2"><FaWallet /><span className="truncate">{walletButton}</span></li>
            </ul>
        </div>
    )
}

export default Sidebar;