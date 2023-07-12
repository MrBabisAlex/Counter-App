import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className="App">
            <div className="container">
                <h1 className="heading">Counter App</h1>
                <h2 className="count">{count}</h2>
                <div className="btn-container">
                    <button className="btn" onClick={decrease}>
                        -
                    </button>
                    <button className="btn" onClick={increase}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
