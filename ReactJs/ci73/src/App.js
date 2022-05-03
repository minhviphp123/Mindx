import { Routes, Route } from "react-router-dom";
import Header from "./comps/Header";
import Info from "./comps/Info";

function App () {

  return (
    <div>
        <Routes>
            <Route path="/" element={<Header />}/>
            <Route path="/info" element={<Info />}/>
        </Routes>
    </div>
  );
}

export default App;