import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import 'firebase/auth';
import { isLoggedIn, loggedInInfo } from '../Login/LoginManager';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const isLogged = isLoggedIn();
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()

    return (
        <nav className="navbar navbar-expand-lg navbar-light nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">ＱＵＡＮＴＵＭ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-light btn">Home </p>
                        </li></Link>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-light btn" href="/destination/Car">Destination</a>
                        </li>

                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-light btn" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-light btn" href="/contact">Contact Us</a>
                        </li>
                        {
                            loggedInUser.email || isLogged ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark" onClick={signOut}>Sign Out, {loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</button> :
                                <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark">Sign In</button></Link>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;