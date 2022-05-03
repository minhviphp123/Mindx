import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function App () {  

  useEffect( async() => {
    let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
    console.log(res);
  }, [])
  return (
      <div>
        <h1>skdsd</h1>
      </div> 
  )
}

export default App;