import logo from '../comps/download.jpg';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function Header () {

    return (
        <div className="header">
            <button>Shopee</button>
            <button>
                <Link to='/login'>Login</Link>
            </button>
        </div>
    )
}

export default Header;