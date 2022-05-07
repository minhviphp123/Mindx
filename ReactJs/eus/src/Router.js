import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import App from "./App";
import Login from "./comps/Sign";

function Router () {

    return (
        <div>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="login" element={<Login />}/>
            </Routes>
        </div>
    );
}

export default Router;