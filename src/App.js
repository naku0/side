import {Header} from './props/Header';
import {Main} from "./props/Main";

import './stylings/App.css';
import mainImage from "./pics/main.webp";
import phoneMain from "./pics/LadyInRed.webp"
import {useRef, useState} from "react";

function App() {
    const [is18, set18] = useState(false);
    const width = window.innerWidth;
    const formRef = useRef();

    return (
        <div className="App">
            {!is18 && (<div className="ageRestrict">
                <div className="form" ref={formRef}>
                    <p>Чтобы пользоваться этим веб-сайтом, Вы должны подтвердить, что Вам исполнилось 18 лет или больше.
                        </p>
                        <p> Вам больше 18 лет?</p>
                        <button onClick={() => set18(true)}>Да, я подтверждаю, что мне больше 18 лет</button>
                </div>
            </div>)}
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
