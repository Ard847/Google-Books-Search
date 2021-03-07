import {NavLink} from "react-router-dom";
import "./header.css"

const Header = () => {

    return(
        <div>
            <header>
                <ul>
                    <li><h3>Google Books</h3></li>
                    <li><h4><NavLink to = "/" >Search</NavLink></h4></li>
                    <li><h4><NavLink to = "/saved" >Saved</NavLink></h4></li>
                </ul>
            </header>
            <div id = "header">
                <h1>(REACT) GOOGLE BOOKS SEARCH</h1>
                <h2>SEARCH FOR AND SAVE BOOKS OF YOUR INTEREST</h2>
            </div>
        </div>
    )
}

export default Header;