import './App.css';
import Child from './child';
import {  useState,useEffect } from 'react';

const App = () => {
	
	const [isShow, setIsShow] = useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}

	// const show = () => {
	// 	alert();
	// }

	// useEffect( () => {
		
	// 	let arr = [];

	// 	document.addEventListener('scroll', () => {

	// 	})
	// })

	let arr = [];

	document.addEventListener('scroll', function() {
		
		if(document.documentElement.scrollTop < arr[arr.length - 1]) {
			setIsShow(true);
		}
		

		if(document.documentElement.scrollTop === 0){
			setIsShow(false);
		}

		arr.push(document.documentElement.scrollTop);
	})

	if(isShow) {
		return (<div>

			<div className='div'>
				<button onClick={handleClick}>toTop</button>
			</div>

		</div>);
	}else{
		return (<div>

			<div className='div'></div>

		</div>);
	}
	
}

export default App;