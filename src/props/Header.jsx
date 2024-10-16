import "../stylings/header.css";
import {createRef, useEffect, useState} from "react";
import logo from "../pics/eventside logo white.svg";
import logo2 from "../pics/eventside logo black.svg";


export const Header = () => {
    const [menu, setMenu] = useState(false);
    const [black, setBlack] = useState(false);
    const logoRef = createRef();
    const headerRef = createRef();

    const showMenu = () => {
        menu?setMenu(false):setMenu(true);
    }


    const goTo = (id, position) => {

        return () => {
            const element = document.querySelector(`#${id}`);
            element.scrollIntoView({
                behavior: "smooth",
                block: position,
            });
            const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
            if(position === "start") {window.scrollTo({ top: y, behavior: "smooth" });}
            setMenu(false);
        };
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
                    <button onClick={goTo("start", "start")}>
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
                        <li onClick={goTo("about-us", "start")}>О нас</li>
                        <li onClick={goTo("menu", "start")}>Коктейльная карта</li>
                        <li onClick={goTo("services", "center")}>Услуги</li>
                        <li onClick={goTo("history", "start")}>История</li>
                        <li onClick={goTo("contact", "end")}>Контакты</li>
                    </ul>
                </nav>
            )}
        </header>

    )
}