import "../stylings/header.css";
import {useState} from "react";

export const Header = () => {
    const [menu, setMenu] = useState(false);
    const showMenu = () => {
        setMenu(!showMenu);
    }
    const goTo = (id) => {
        return () => {
            const element = document.querySelector(`#${id}`);
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };
    }

    return (
        <>
            <div className="video" id="start">
                <ul className="header">
                    <li className="header__logo">
                        <button onClick={goTo("start")}>SIDE</button>
                    </li>
                    <li>
                        <button onClick={goTo("about")}>Наша идеология</button>
                    </li>
                    <li>
                        <button onClick={goTo("menu")}>Коктейльная карта</button>
                    </li>
                    <li>
                        <button onClick={goTo("contact")}>Контакты</button>
                    </li>
                    <li className="header__menu">
                        <button className="material-symbols-outlined" onClick={showMenu}>
                            menu
                        </button>
                    </li>
                </ul>
            </div>


        </>
    )
}