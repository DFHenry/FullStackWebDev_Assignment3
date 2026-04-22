import { NavLink } from "react-router";
import "./navBar.css";

export default function NavBar()
{
    return(
        <nav id="main_navigation" aria-label="Main menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>    
        </nav>
    );
}