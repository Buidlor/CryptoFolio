
import { useState, useEffect } from "react";
import axios from "axios";


const PortfolioBody = ({session }) => {

    const [assets, setAssets] = useState<any>([]);
    
    useEffect(() => {   
        if (session?.address){
            axios(`http://localhost:3000/assets/${session.address}`, {     
                withCredentials: true,
            })
            .then(({ data }) => {
                setAssets(data);
                
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [session?.address]);

    console.log(assets.natives);
    
    return ( 
        <div className="portfolio-body h-screen ml-96 pl-7" style={{height: "calc(100vh - 4rem)"}}>
            <div className="my-5">
                <p className=" text-2xl font-bold ">Welcome</p>
                <p className="text-xl font-bold">{session.address}</p>
            </div>
           <div >
                <h1 className=" text-3xl my-3">Base Assets</h1>
                <table className="border">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className=" p-1">Chain</th>
                            <th className=" p-1">Asset</th>
                            <th className=" p-1">Balance</th>
                            <th className=" p-1">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        { assets.chainData ? (assets.chainData.map((chain,i) => {
                            return (
                                <tr>
                                    <td className=" p-2">{chain.name}</td>
                                    <td className=" p-2">{chain.symbol}</td>
                                    <td className=" p-2">{assets.natives[i]}</td>
                                    <td className=" p-2">dollar value here</td>
                                </tr>
                            )
                        })): (<tr><td>loading...</td></tr>)
                    }
                        
                    </tbody>
                </table>
           </div>
            <div className="my-5">
                <h1 className=" text-3xl my-3">Tokens</h1>
                <table className="table-auto w-full border">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="p-2 text-lg font-bold tracking-wide">token name</th>
                            <th className="p-2 text-lg font-bold tracking-wide">token symbol</th>
                            <th className="p-2 text-lg font-bold tracking-wide">token balance</th>
                            <th className="p-2 text-lg font-bold tracking-wide">token value</th>
                            <th className="p-2 text-lg font-bold tracking-wide">token contractAddress</th>
                        </tr>
                    </thead>
                    <tbody>
                        { assets.tokens ? (assets.tokens.map((token) => {
                            return (
                                <tr>
                                    <td className="p-2">{token.token.name}</td>
                                    <td className="p-2">{token.token.symbol}</td>
                                    <td className="p-2">{token.value}</td>
                                    <td className="p-2">Price in $ to be calculated</td>
                                    <td className="p-2">{token.token.contractAddress}</td>
                                </tr>
                            )
                        }))
                        : (<tr><td>loading...</td></tr>)

                    }
                    </tbody>
                </table>
              
            </div>    

        </div>
    )
}

export default PortfolioBody;