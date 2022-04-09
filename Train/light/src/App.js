import "./App.css";
import Form from "./comps/header";
import { useState } from "react";
import Expense from "./comps/Expenses";

const generateId = () => Math.floor(Math.random() * 1000000);

const initialState = [

    {
      id: generateId(),
      date: new Date('2022-04-05'),
      name: 'reading',
      amout: 100
    },
    {
      id: generateId(),
      date: new Date('2022-04-04'),
      name: 'listen to muzik',
      amout: 2000
    },
    {
      id: generateId(),
      date: new Date('2022-04-03'),
      name: 'playing girl',
      amout: 200
    },
    {
      id: generateId(),
      date: new Date('2022-04-02'),
      name: 'LOL',
      amout:1500
    },
    
]

function App() {

    const [expenseItems, setExpenseItems] = useState([initialState]); 

    const handleAddExpense = (value) => {
        setExpenseItems((prev) => {
            return [
              ...prev,
              {
                id: generateId(),
                date: new Date(value.date),
                name: value.name,
                amout: value.amout
              }
            ];
        })
    }

    return (
      <div>
        <Form onSubmit={handleAddExpense}/>
        <Expense expenseItems={expenseItems}/>
      </div>
    );
}



export default App;
