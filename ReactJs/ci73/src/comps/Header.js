import { Link } from "react-router-dom";
import Info from "./Info";

function Header () {

    return (
        <div>
            <h1>Home</h1>
            <Link to='/info'>Info</Link>
        </div>
    );
}

export default Header;