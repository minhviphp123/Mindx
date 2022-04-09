import { useState ,useEffect } from "react";

const Counting = () => {

    const [value, setValue] = useState(''); 
    let [count, setCount] = useState(value.length)

    useEffect(() => {
        setCount(value.length);
      });

    return (
        <div>
            <h1>EX2</h1>
            <input placeholder="Enter Text..." onChange={e => setValue(e.target.value)} value={value}/>
            <p>Word:{count}</p>
        </div>
    );
}

export default Counting;