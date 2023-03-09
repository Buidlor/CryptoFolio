import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
    const navigate = useNavigate();

    const [session, setSession] = useState({});

    useEffect(() => {
        axios("http://localhost:3000/authenticate", {
            withCredentials: true,
        })
        .then(({ data }) => {
            const { iat, ...authData } = data; //remove unimportant iat value

            setSession(authData);
        }).catch((err) => {
            navigate("/"); //redirect to landing page
        })
    }, []);

    async function signOut() {
        await axios("http://localhost:3000/logout", {
            withCredentials: true,
        })
        navigate("/");
    }
    
    return(
        <div className="portfolio">
            <Header />
            <Sidebar/>
        </div>
    );
}

export default Portfolio;