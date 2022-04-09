import Content from "./Content";
import './App.css';
import {ThemeProvider} from "./ThemeProvider";

const App = () => {

    return (
        <ThemeProvider>
            <div style={{padding : 20}}>
                <button>Toggle theme</button>
                <Content />
            </div>
        </ThemeProvider>
    );
}

export default App;