import "../stylings/header.css";
import {createRef, useEffect, useState} from "react";
import logo from "../pics/eventside logo white.svg";
import logo2 from "../pics/eventside logo black.svg";
import {goTo} from "./goTo";


export const Header = () => {
    const [menu, setMenu] = useState(false);
    const [black, setBlack] = useState(false);
    const logoRef = createRef();
    const headerRef = createRef();

    const showMenu = () => {
        menu?setMenu(false):setMenu(true);
    }

    const handleClick = (position, scrollPoint) =>{
        goTo(position, scrollPoint);
        setMenu(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY>0) {
                logoRef.current.classList.add("scroll");
                headerRef.current.classList.add("scroll");
                setBlack(true);
            } else {
                logoRef.current.classList.remove("scroll");
                headerRef.current.classList.remove("scroll");
                setBlack(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [logoRef, headerRef]);


    return (
        <header>
            <ul className="header" ref={headerRef}>
                <li className="header__logo">
                    <button onClick={() => handleClick("start", "start")}>
                        <img src={black?logo2:logo} alt="event-side-logo" className="logo__white" id="logo" ref={logoRef}/>
                    </button>
                </li>
                <li className={"header__menu_black"}>
                    <button className="material-symbols-outlined" data-icon="menu" onClick={showMenu}>
                        menu
                    </button>
                </li>
            </ul>
            {menu && (
                <nav className="navMenu" onClick={showMenu}>
                    <ul className="navigation">
                        <img src={logo2} alt="logo_eventside-black" onClick={showMenu}/>
                        <li onClick={() => {handleClick("about-us", "start")}}>О нас</li>
                        <li onClick={() => {handleClick("menu", "start")}}>Коктейльная карта</li>
                        <li onClick={() => {handleClick("services", "center")}}>Услуги</li>
                        <li onClick={() => {handleClick("history", "start")}}>История</li>
                        <li onClick={() => {handleClick("contact", "end")}}>Контакты</li>
                    </ul>
                </nav>
            )}
        </header>

    )
}