import './App.css';
import {useState ,useEffect} from 'react';

const Scrolling = () => {
    let a = [];
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(false);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect( () => {
        document.addEventListener('scroll', () => {
            
            if(document.documentElement.scrollTop < a[a.length - 1]) {
                setIsShow(true);
            }else{
                setIsShow(false);
            }

            a = [];
            a.push(document.documentElement.scrollTop);
        })
    }, []);

   return(
       <div className='div'>
           {isShow && <button onClick={handleClick}>toTOP</button>}
       </div>
   );
}

export default Scrolling;