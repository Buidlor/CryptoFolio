import { FaWallet } from "react-icons/fa";
import { useState, useEffect } from "react";

//session.address.slice(0,5) +"..." +session.address.slice(-5)
const Sidebar = ({session, sidebarEnable}) => {

    const [walletButton, setWalletButton] = useState("Wallet");

    useEffect(() => {
        setWalletButton(session ? session.address.slice(0,5) + "..." +session.address.slice(-5) : "Wallet");
    }, [session]); 
    console.log("i mean sidebar is toggled: ", sidebarEnable);
 
    return(
        //
        <div className={`sidebar fixed bg-gray-900 text-white lg:left-0 px-4  w-[300px] overflow-y-auto  lg:block transition-transform duration-300 ${sidebarEnable ? ' block' : ' hidden'}`} style={{height: "calc(100vh - 4rem)"}} > 
            <div className=" p-5 flex items-center gap-5">
                <img src="./src/assets/metamask-icon-scaled.png" alt="mm fox" className="w-1/6"/>
                <div>
                    <h1 className="text-3xl font-bold pt-2">Wallet $</h1>
                    <p className=" pb-2">$ Value here</p>
                </div>
            </div>
                <hr className="my-2 text-gray-600"/>
            <ul className="p-5">
                <li className="p-2.5 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-xl font-bold ">Market</li>
                <li className="p-2.5 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-xl font-bold ">Pools</li>
            </ul>
            <h1 className="text-2xl font-bold p-2 ">My Accounts</h1>
            <ul className="mx-5">
                <li className=" text-green-600 flex items-center gap-2 p-2.5 rounded-md cursor-pointer hover:bg-blue-600 font-bold">
                    <FaWallet />
                    <span className="truncate p-1">{walletButton}</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;