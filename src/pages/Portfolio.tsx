import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PortfolioBody from "../components/PortfolioBody";

interface Session {
    address: string;
}


const Portfolio = () => {
    const navigate = useNavigate();
    const [session, setSession] = useState<Session>({address: ""});
    const [search, setSearch] = useState<string>("");
    const [assets, setAssets] = useState<any>([]);
   
   
    useEffect(() => {
        axios("http://localhost:3000/authenticate", {
            withCredentials: true,
        })
        .then(({ data }) => {
            const { iat, ...authData } = data; //remove unimportant iat value
            setSession(authData);
        }).catch((err) => {
            console.log(err);
            navigate("/"); //redirect to landing page
        })
    }, []);

   
    //0x4b16c5de96eb2117bbe5fd171e4d203624b014aa
    //0x500a746c9a44f68fe6aa86a92e7b3af4f322ae66 
    //0x42e7d87b0003ff51b92949274e9b54dc47cf2f23
    //0x249d89ee6abadc95480bd840e13a81198aa186ad

    //address to follow: 
    //0x7617e602ea3f99e0c8e9b864978dea7631174b3b

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        return e
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //need to set search to the value of handlesearch

        await axios(`http://localhost:3000/assets/${search}`, {     
            withCredentials: true,
        })
        .then(({ data }) => {
            setAssets(data);
        }).catch((err) => {
            console.log(err);
        })
        return assets
    }
    
    console.log(assets);
    return(
        <div className="portfolio ">
            <Header session ={session} handleSearch = {handleSearch} handleSubmit={handleSubmit} />
            <div className="flex overflow-y-auto">
                <Sidebar session ={session}/>
                <PortfolioBody 
                    session = {session}
                    assetsB = {assets} 
                />
            </div>
        </div>
    );
}

export default Portfolio;