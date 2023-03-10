import Header from "../components/Header";
import LandingContent from "../components/LandingContent";
import { useNavigate } from "react-router-dom";

import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import axios from "axios"; 

// https://docs.moralis.io/authentication-api/how-to-authenticate-users-with-metamask-using-react

interface LandingProps {
    handleAuth: () => Promise<void>;
}


const Landing: React.FC<LandingProps> = ({session}) => {
    const navigate = useNavigate();

    const { connectAsync } = useConnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();

    const handleAuth = async () => {
        //disconnects the web3 provider metamask
        console.log(isConnected)
        if (isConnected) {
            navigate('/portfolio');
            //await disconnectAsync();
        }else {

            // enabling the web3 provider metamask
            const { account, chain } = await connectAsync({
                connector: new InjectedConnector(),
            });
    
            const userData = { address: account, chain: 1, network: 'evm' };
            // making a post request to our 'request-message' endpoint
            const { data } = await axios.post(
                'http://localhost:3000/request-message',
                userData,
                {
                 headers: {
                  'content-type' : 'application/json',
                },
                }
            );
            const message = data.message;
            // signing the message
            const signature = await signMessageAsync({message});
    
            await axios.post(
                'http://localhost:3000/verify',
                { signature, message, },
                { withCredentials: true } //set cookie from express server
            );
            navigate('/portfolio');
        }
        console.log("Signed in");
    };

    return (
        <div className="landing">
            <Header session={session} />
            <LandingContent handleAuth = {handleAuth}  />
        </div>
    )
}

export default Landing;