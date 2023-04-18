import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
            <h1 className="news_font">NEWS</h1>
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
        </div>
    );
}

export default NavBar;