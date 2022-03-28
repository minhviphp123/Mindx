import { useState } from "react";
import "./App.css";

function App() {
  
  let [light, setLight] = useState(0)

  const nextLight = () => {
      setLight(light + 1);
  }

  if(light === 3){
      light = 0;
  }

  if(light === 0) {

    return (

      <div className="app">

          <button onClick={nextLight}>Next</button>

          <div className="lights">

              <div className="light redLight"></div>
              <div className="light"></div>
              <div className="light"></div>

          </div>

      </div>

  );

  }

  else if (light === 1){ 

    return (

      <div className="app">

          <button onClick={nextLight}>Next</button>

          <div className="lights">

              <div className="light"></div>
              <div className="light greenLight"></div>
              <div className="light"></div>

          </div>

      </div>

  );

  }else{

    return (

      <div className="app">

          <button onClick={nextLight}>Next</button>

          <div className="lights">

              <div className="light"></div>
              <div className="light"></div>
              <div className="light yellowLight"></div>

          </div>

      </div>

  );

  }

  console.log(light);

  
}

export default App;
