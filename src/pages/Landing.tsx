import Header from "../components/Header";
import LandingContent from "../components/LandingContent";

// https://docs.moralis.io/authentication-api/how-to-authenticate-users-with-metamask-using-react

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <LandingContent />
        </div>
    )
}

export default Landing;