import "../stylings/Main.css";
import WatermelonNegroni2 from "../pics/WatermelonNegroni2.webp"
import onas from "../pics/photo_onas.webp"
import barmen from "../pics/IMG_8108-round.webp"
import {useEffect, useState} from "react";
import {goTo} from "./goTo";
import {CocktailMenu} from "./CocktailMenu";
import {cocktails} from "./CocktailList";
import {BarmanCards} from "./BarmanCards";
import {CocktailCarousel} from "./CocktailCarousel";
import {ReactComponent as CallIcon} from "../icons/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";


export const Main = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [showCarousel, setShowCarousel] = useState(false);
    const [isMobile, setMobile] = useState(window.innerWidth < 850);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 850);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (<main>
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
            <CocktailMenu cocktails={cocktails} showMenu={showMenu} setShowMenu={setShowMenu}/>
            <div className="services" id="services">
                <div className="reasons">
                    <div className="first">
                        <button className="first-service" onClick={() => {
                            setShowCarousel(!showCarousel);
                            setShowCard(false)
                        }}>
                            <p className="reason_text">Авторская коктейльная карта</p>
                        </button>
                        {showCarousel && isMobile && (<CocktailCarousel/>)}
                    </div>
                    <div className="second">
                        <button className="second-service" onClick={() => {
                            setShowCard(!showCard);
                            setShowCarousel(false)
                        }}>
                            <p className="reason_text">Безупречный сервис</p>
                        </button>
                        {showCard && isMobile && (<BarmanCards/>)}
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
                {showCard && !isMobile && (<BarmanCards/>)}
                {showCarousel && !isMobile && (<CocktailCarousel/>)}
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
                            <CallIcon alt="call" style={{fill: "var(--black)"}}/>
                            +7(927)606-79-44</a>

                    </div>
                    <div className="second__contact">
                        <h2>Бизнес-ассистент</h2>
                        <p>
                            Матвей Шуберт</p>
                        <a href="tel:+7(999)866-44-68">
                            <CallIcon alt="call" style={{fill: "var(--black)"}}/>
                            +7(999)866-44-68
                        </a>
                    </div>
                </div>
            </div>
        </main>);
}