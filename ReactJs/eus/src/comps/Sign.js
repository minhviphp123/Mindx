import { Link } from "react-router-dom";
import { useState } from "react";

function Sign () {

    const userInfo = JSON.parse(window.localStorage.getItem('details'))

    const [user, setUser] = useState({name: '', email: ''});
    const [error, setError] = useState('');

    return (
        <div>
            {(user.email !== '') ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Sign;