
import { useState, useEffect } from "react";
import axios from "axios";


const PortfolioBody = ({session}) => {

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

    //console.log(assets);
    
    return ( 
        <div className="portfolio-body ml-5">
            <div className="">
                <p className=" text-2xl font-bold ">Welcome</p>
                <p className="text-xl font-bold">{session.address}</p>
            </div>
           <div >
                <h1 className=" text-3xl ">Assets</h1>
                <table className="border-separate border-spacing-2 border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 p-2">Asset</th>
                            <th className="border border-slate-600 p-2">Balance</th>
                            <th className="border border-slate-600 p-2">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-700 p-2">ETH</td>
                            <td className="border border-slate-700 p-2">{parseFloat(assets.native).toFixed(4)}</td>
                            <td className="border border-slate-700 p-2">Dollar value here</td>
                        </tr>
                        
                    </tbody>
                </table>
           </div>
                
                     <pre>
                        {JSON.stringify(
                            assets.tokens.map(token => ({
                                value: token.value, 
                                name: token.token.name,
                                symbol: token.token.symbol,
                                contractAddress: token.token.contractAddress
                            })), 
                            null, 
                            2
                        )}
                    </pre> 


        </div>
    )
}

export default PortfolioBody;