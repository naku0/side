import {Header} from './props/Header';
import {Main} from "./props/Main";

import './stylings/App.css';
import mainImage from "./pics/main.webp";
import phoneMain from "./pics/LadyInRed.webp"

function App() {
    const width = window.innerWidth;
    return (
        <div className="App">
            <Header/>
            <div className="video" id="start">
                <img src={(width < 850) ? phoneMain : mainImage} alt="main"/>
                <h1>ИСКУСCТВО В КАЖДОМ ГЛОТКЕ</h1>
            </div>
            <Main/>
        </div>
    );
}

export default App;
