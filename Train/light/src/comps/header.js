import { useState } from "react"

const Form = (props) => {
    
    const [isShow, setIsShow] = useState(false);
    
    const [value, setValue] = useState({
        name: '',
        amount: 0,
        date: ''
    })

    const handleOnChange = (e) => {
        e.preventDefault();
        
        setValue(e.target.value);

        setValue((prev) => {
            return {
                ...prev,
                [e.target.value] : e.target.value
            };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setValue((prev) => {
            return {
                ...prev = ''
            };
        })

        props.onSubmit(value);  

        resetForm();
    }

    const handleClick = () => {
        setIsShow(true);
    }

    const resetForm = () => {
        document.getElementById('form').reset();

        setIsShow(false);
    }

    if(!isShow) {
        return (
            <div>
                <button onClick={handleClick}>Add New Expense</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} id='form'>
            <table>
                <tr>
                    <label>Name</label>
                    <input value={value.name} onChange={handleOnChange} type='text' name="name"/>
                </tr>
                <tr>
                    <label>Amount</label>
                    <input type='number' value={value.amount} onChange={handleOnChange}/>
                </tr>
                <tr>
                    <label>Date</label>
                    <input type='date' value={value.date} onChange={handleOnChange}/>
                </tr>
            </table>

            <div>
                <button>Add</button>
                <button onClick={() => {setIsShow(false);resetForm()}}>Cancel</button>
            </div>

        </form>
    );
}

export default Form;
