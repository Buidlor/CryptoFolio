
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


    //
    return ( 
        <div className="bg-gray-100 p-7 w-screen h-full md:h-screen " style={{height: "calc(100vh - 4rem)"}}>
            <div className="my-5">
                <p className=" text-2xl font-bold ">Welcome</p>
                <p className="text-xl text-green-700 font-bold">{session.address}</p>
            </div>
           <div >
                <h1 className=" text-3xl my-3">Base Assets</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chain</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        { assets.chainData ? (assets.chainData.map((chain,i) => {
                            return (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                    <td className="px-6 py-4 text-sm text-gray-900">{chain.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{chain.symbol}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{assets.natives[i]}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$</td>
                                </tr>
                            )
                        })): (<tr><td>loading...</td></tr>)
                    }
                        
                    </tbody>
                </table>
           </div>
            <div className="my-5 ">
                <h1 className=" text-3xl my-3">Tokens</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">token name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">token symbol</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">token balance</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">token value</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">token contractAddress</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        { assets.tokens ? (assets.tokens.map((token,index) => {
                            return (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                    <td className="px-6 py-4 text-sm text-gray-900">{token.token.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{token.token.symbol}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{token.value}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{token.token.contractAddress}</td>
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