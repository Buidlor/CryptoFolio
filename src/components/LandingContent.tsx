
interface LandingContentProps {
    handleAuth: () => Promise<void>;
}

const LandingContent:React.FC<LandingContentProps> = ({ handleAuth }) => {
  
    
    return (
        <div className="landingcontent">
            <div className="flex justify-center items-center flex-col h-screen" style={ {height: "calc(100vh - 4rem)"}}>
                <div className="flex flex-col justify-center items-center gap-3 p-5 md:border md:h-1/2 md:w-1/3 rounded-lg md:shadow-md" >
                    <button onClick={handleAuth } className="rounded-md p-2 w-64 shadow-md bg-blue-500 text-white">
                        Connect Wallet
                    </button>
                    <button className="border rounded-md p-2 w-64 shadow-md">
                        Register
                    </button>
                    <button className="border rounded-md p-2 w-64 shadow-md">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingContent