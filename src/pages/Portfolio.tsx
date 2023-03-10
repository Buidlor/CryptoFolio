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


    return(
        <div className="portfolio">
            <Header session ={session}/>
            <div className="body flex">
                <Sidebar session ={session}/>
                <PortfolioBody 
                    session = {session} 
                 
                />
            </div>
        </div>
    );
}

export default Portfolio;