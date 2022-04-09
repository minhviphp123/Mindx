import './child.css';
import { useEffect } from 'react';

const Child = () => {

   function scrolling() {
    let arr = [];
    const button = document.querySelector('button');		

    document.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop < arr[arr.length - 1]) {
                button.style.display = 'block';
        }else{
            button.style.display = 'none';
        }

        arr.push(document.documentElement.scrollTop);
        arr = arr.top();
    })
   }
    return (
        <div>
            <div class="divv">
            <button>toTop(when you are on the top, click one more time to hide me)</button>
            </div>
        </div>
    );
}

export default Child;