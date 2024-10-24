import "../stylings/Main.css";
import {Image} from "./Image";
import CornHighboll from "../pics/CornHighboll.webp";
import LadyInRed from "../pics/LadyInRed.webp";
import LycheeGimlet from "../pics/LycheeGimlet.webp";
import PassionSour from "../pics/PassionSour.webp";
import Shibu from "../pics/Shibu.webp";
import ShioriNight from "../pics/ShioriNightHEIC.webp";
import ShisoSpritz from "../pics/ShisoSpritz.webp";
import SpicyMango from "../pics/SpicyMango.webp";
import UmeMartini from "../pics/UmeMartini.webp";
import SabiDiablo from "../pics/SabiDiablo.webp";
import WatermelonNegroni from "../pics/WatermelonNegroni.webp";
import WatermelonNegroni2 from "../pics/WatermelonNegroni2.webp"
import onas from "../pics/photo_onas.webp"
import barmen from "../pics/IMG_8108-round.webp"
import barmen2 from "../pics/1729611246141.webp"
import {useEffect, useState} from "react";
import {goTo} from "./goTo";

export const Main = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [isMobile, setMobile] = useState(window.innerWidth < 850);
    const cocktails = [
        {
            src: UmeMartini,
            alt: "Ume Martini",
            text: "Ume Martini",
            description: {options: ["Japanese plum wine", "Gin", "Chardonnay", "Vanilla extract", "Reverse spherification plum yolk"]}
        },
        {
            src: ShioriNight,
            alt: "Shiori Night",
            text: "Shiori Night",
            description: {options: ["Vodka", "Mint", "Blackberry", "Creamy blue cheese foam"]}
        },
        {
            src: ShisoSpritz,
            alt: "Shiso Spritz",
            text: "Shiso Spritz",
            description: {options: ["Shiso cordial", "Kalamansi", "Limoncello", "Prosecco"]}
        },
        {
            src: Shibu,
            alt: "Shibu",
            text: "Shibu",
            description: {options: ["Kiwi", "Matcha", "Yuzu", "Prosecco"]}
        },
        {
            src: LadyInRed,
            alt: "Lady in Red",
            text: "Lady in Red",
            description: {options: ["Gin", "Calvados", "Dragonfruit cordial"]}
        },
        {
            src: LycheeGimlet,
            alt: "Lychee Gimlet",
            text: "Lychee Gimlet",
            description: {options: ["Gin", "Lychee", "Lime", "Sugar"]}
        },
        {
            src: WatermelonNegroni,
            alt: "Watermelon Negroni",
            text: "Watermelon Negroni",
            description: {options: ["Clavis Watermelon Negroni", "London Dry Gin"]}
        },
        {
            src: SabiDiablo,
            alt: "Sabi Diablo",
            text: "Sabi Diablo",
            description: {options: ["Pomegranate juice", "Lychee liqueur", "Tequila", "Ginger beer", "Lime"]}
        },
        {
            src: CornHighboll,
            alt: "Corn Highboll",
            text: "Corn Highboll",
            description: {options: ["Whiskey", "Popcorn syrup", "Soda"]}
        },
        {
            src: PassionSour,
            alt: "Passion Sour",
            text: "Passion Sour",
            description: {options: ["Whiskey", "Passion fruit", "Red pepper", "Sugar", "Lemon"]}
        },
        {
            src: SpicyMango,
            alt: "Spicy Mango",
            text: "Spicy Mango",
            description: {options: ["Rum", "Mango", "Cinnamon", "Coconut cream"]}
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 850);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main>
            <div className="about-us" id="about-us">
                <div className="first-block">
                    <p>
                        Компания Eventside занимается организацией мероприятий по части напитков, сотрудничает с
                        ведущими импортерами алкоголя, агентствами и брендами.
                    </p>
                </div>
                <div className="second-block">
                    <div className="textblock">
                        <p>В ваших бокалах мы собрали актуальные современные тренды, незабываемую редкую классику и
                            инновационную молекулярную кухню. Мы предоставляем Вам нашу авторскую коктейльную карту, а
                            так же готовы осуществить индивидуальный подбор и разработку напитков под Ваши запросы.</p>
                    </div>
                    <img src={onas} alt="Spicy Mango"/>
                </div>
                <div className="first-block">
                    <p>Выездной бар с эксклюзивной авторской коктейльной картой.</p>
                </div>
            </div>
            <div id="menu" className="menu">
                <h1>Коктейльная карта</h1>
                <div className={showMenu ? "menu__grid" : "menu__grid__hidden"}>
                    {cocktails.slice(0, showMenu ? cocktails.length : 3).map((cocktail, index) => (
                        <Image key={index} src={cocktail.src} alt={cocktail.alt} text={cocktail.text}
                               description={cocktail.description}
                        />
                    ))}
                    {cocktails.length > 3 && (
                        <div className="cocktail__card">
                            <p>Некоторые напитки Вы можете найти и попробовать
                                в ресторане <span className="important">OVO (Michelin guide)</span> и <span
                                    className="important">Lobby
                                Lounge Bar</span> при отеле <span className="important">Lotte Hotel Moscow</span>.</p>
                            {showMenu ? (
                                <button onClick={() => setShowMenu(false)}>Спрятать</button>
                            ) : (
                                <button onClick={() => setShowMenu(true)}>Ознакомиться подробнее</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="services" id="services">
                <div className="reasons">
                    <div className="first">
                        <button className="first-service" onClick={() => {
                            goTo("menu", "start")
                        }}>
                            <p className="reason_text">Авторская коктейльная карта</p>
                        </button>
                    </div>
                    <div className="second">
                        <button className="second-service" onClick={() => setShowCard(!showCard)}>
                            <p className="reason_text">Безупречный сервис</p>
                        </button>
                        {showCard && isMobile && (
                            <div className="info-container">
                                <div className="card">
                                    <img src={barmen} alt="Rakhim"/>
                                    <div className="card--info">
                                        <p className="card--name">
                                            Рахим
                                        </p>
                                        <div className="card--description">
                                            <p>Опыт Работы: 5 лет</p>
                                            <p>Lotte Hotel, Marriott, Buro Tsum, City Space Bar</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={barmen2} alt="Yaroslav"/>
                                    <div className="card--info">
                                        <p className="card--name">
                                            Ярослав
                                        </p>
                                        <div className="card--description">
                                            <p>Опыт работы: 8 лет</p>
                                            <p>Buro Tsum, Sixty</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="third">
                        <button className="third-service" onClick={() => {
                            goTo("contact", "end")
                        }}>
                            <p className="reason_text">Консультация и индивидуальный подбор напитков под Ваши
                                запросы</p>
                        </button>
                    </div>
                </div>
                {showCard && !isMobile && (
                    <div className="info-container">
                        <div className="card">
                            <img src={barmen} alt="Rakhim"/>
                            <div className="card--info">
                                <p className="card--name">
                                    Рахим
                                </p>
                                <div className="card--description">
                                    <p>Опыт Работы: 5 лет</p>
                                    <p>Lotte Hotel, Marriott, Buro Tsum, City Space Bar</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={barmen2} alt="Yaroslav"/>
                            <div className="card--info">
                                <p className="card--name">
                                    Ярослав
                                </p>
                                <div className="card--description">
                                    <p>Опыт работы: 8 лет</p>
                                    <p>Buro Tsum, Sixty</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <div id="history" className="history">
                <div className="first-block">
                    <div className="history-text-block">
                        <p>Сиде — в переводе с Анатолийского означает «Гранат» — символ вечной жизни и процветания.
                            Согласно греческой легенде, первое гранатовое дерево посадила богиня Афродита, а золотой
                            гранат
                            на
                            острове Кипр стал символом любви и уз. </p>
                    </div>
                    <img src={WatermelonNegroni2} alt="Watermelon Negroni"/>

                </div>
                <div className="about">
                    <p>
                        SIDE — бар, который <span className="italic">не имеет единого местонахождения</span>. Как Вы
                        приходите в своё любимое место, для того, чтобы отпраздновать знаменательный день, так и любимое
                        место <span className="italic">может посетить Вас</span>.
                        Мы совместили первоклассный сервис с современными технологиями приготовления напитков,
                        исключительно <span className="italic">свежими и натуральными продуктами</span>.
                    </p>
                </div>
                <div className="third-block">
                    <img src={barmen} alt="Rakhim Mayers"/>
                    <p>
                        «Меня зовут Рахим, идея для создания выездного бара пришла мне с моими друзьями - Викторией
                        Косенковой и Матвеем Шуберт. Меня часто звали работать на мероприятия, но выездной бар — это в
                        любом случае придаток полноценного бара, поэтому мы решили возвести эту идею в абсолют и сделать
                        выездной бар ничем не уступающим лучшим заведениям страны.»
                    </p>
                </div>
            </div>
            <div className="contact" id="contact">
                <div className="contacts">
                    <div className="first__contact">
                        <h2>Основатель</h2>
                        <p>
                            Рахим Мирзоазизов
                        </p>
                        <a href="tel:+7(927)606-79-44">
                            <i className="material-symbols-outlined">call</i>
                            +7(927)606-79-44</a>

                    </div>
                    <div className="second__contact">
                        <h2>Бизнес Ассистент</h2>
                        <p>
                            Виктория Косенкова</p>
                        <a href="tel:+7(911)598-75-70">
                            <i className="material-symbols-outlined">call</i>
                            +7(911)598-75-70
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}