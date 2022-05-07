import { useState } from "react";

function SignInForm ({Login, error}) {

    const [details, setDetails] = useState({name: '', email: '', password: ''});

    return (
        <div>
            <form action="">
                <h2>Login</h2>
                {(error !== '') ? (<div className="error">{error}</div>) : ''}
            </form>
        </div>
    );
}

export default SignInForm;