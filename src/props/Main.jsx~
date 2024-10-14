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
import {useState} from "react";

export const Main = () => {
    const [showMenu, setShowMenu] = useState(false);
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

    return (
        <main>
            <div className="about-us" id="about-us">
                <div className="first-block">
                    <p>
                        Компания Eventside занимается организацией мероприятий по части напитков и сотрудничает с
                        ведущими
                        импортерами алкоголя, агентствами и брендами.
                    </p>
                </div>
                <div className="second-block">
                    <div className="textblock">
                        <p>В ваших бокалах мы собрали актуальные современные тренды, незабываемую редкую классику и
                            молекулярную кухню в виде украшений напитков. Мы предоставляем безупречный гостеприимный
                            сервис,
                            авторскую коктейльную карту, а так же подбор всех напитков под Ваши запросы.</p>
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
                                в ресторане <span className="italic">OVO (Michelin guide)</span> и <span
                                    className="italic">Lobby
                                Lounge Bar</span> при отеле <span className="italic">Lotte Hotel Moscow</span>.</p>
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
                    <div className="first-reason">
                        <p className="reason_text">Авторская коктейльная карта</p>
                    </div>
                    <div className="second-reason">
                        <p className="reason_text">Безупречный сервис</p>
                    </div>
                    <div className="third-reason">
                        <p className="reason_text">Консультация и индивидуальный подбор напитков под Ваши запросы</p>
                    </div>
                </div>

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
                        приходите в своё любимое заведение
                        после для того чтобы отпраздновать знаменательный день, так и любимое место теперь <span
                        className="italic">может посетить
                    Вас</span>. Мы совместили современные технологии приготовления с исключительно <span
                        className="italic">свежими и натуральными
                    продуктами</span>.
                    </p>
                </div>
                <div className="third-block">
                    <img src={barmen} alt="Rakhim Mayers"/>
                    <p>
                        «Меня зовут Рахим Майерс, идея для создания выездного бара пришла нам, когда мы сидели после
                        работы с моими друзьями Викторией Косенковой и Матвеем Шуберт. Меня часто звали работать на
                        различного рода мероприятия, но выездной бар — это в любом случае придаток полноценного бара,
                        поэтому мы решили возвести эту идею в абсолют и сделать выездной бар ничем не уступающий лучшим
                        коктейльным барам.»
                    </p>
                </div>
            </div>
            <div className="contact" id="contact">
                <div className="contacts">
                    <div className="first__contact">
                        <h2>Основатель</h2>
                        <p>
                            Рахим Майерс
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