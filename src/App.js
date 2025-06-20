import {Header} from './Components/Header';
import {Main} from "./Components/Main";

import './stylings/App.css';
import mainImage from "./pics/main.webp";
import phoneMain from "./pics/LadyInRed.webp"
import {useRef, useState} from "react";
import {ReactComponent as Chat} from "../src/icons/conversation-svgrepo-com.svg";

function App() {
    const [is18, set18] = useState(false);
    const width = window.innerWidth;
    const formRef = useRef();

    return (
        <div className="App">
            {!is18 && (<div className="ageRestrict">
                <div className="form" ref={formRef}>
                    <p>Сайт содержит информацию для лиц совершеннолетнего возраста.
                    </p>
                    <button onClick={() => set18(true)}>Да, мне исполнилось 18 лет.</button>
                </div>
            </div>)}

            <Header/>

            <a href="https://wa.me/79276067944" className="whatsapp-button">
                <Chat/>
            </a>

            <div className="video" id="start">
                <img src={(width < 850) ? phoneMain : mainImage} alt="main"/>
                <h1>ИСКУСCТВО В КАЖДОМ ГЛОТКЕ</h1>
            </div>
            <Main/>

        </div>
    );
}

export default App;
