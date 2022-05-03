import Header from './comps/Header';
import Basket from './comps/Basket';
import data from './data';
import Main from './comps/Main';
import { useState } from 'react';

function App() {
  
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id); //tim trong cart
    if (exist) { //neu tim thay phan tu trung, qty++
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x//check, co thi ++1
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]); //neu k, them ve them thuoc tinh qty
    }
  };
  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;