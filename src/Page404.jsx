import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <>
            <NavBar />
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <h1 className="page404">404 - Page Not Found</h1>
                <img 
                    src="/404.png" 
                    alt="404 Error Icon" 
                    className="page404 img" 
                />
                <p style={{ marginTop: "2vh", fontSize: "1.5vw" }}>
                    The page you are looking for does not exist.
                </p>
                <Link to="/">Go to Home</Link>
            </div>
        </>
    );
}

export default Page404;
