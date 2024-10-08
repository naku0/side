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

export const Main = () => {
    return (
        <main>
            <div className="about" id="about">
                <p>
                    SIDE — бар, который не имеет единого местонахождения. Как вы приходите в своё любимое заведение
                    после для того чтобы отпраздновать знаменательный день, так и любимое место теперь может посетить к
                    Вас. Мы совместили современные технологии приготовления с исключительно свежими и натуральными
                    продуктами
                </p>
            </div>
            <div id="menu" className="menu">
                <h1>Коктейльная карта</h1>
                <div className="menu__grid">
                    <Image src={CornHighboll} alt={"Corn Highboll"} text={"Corn Highboll"}
                           description={{options: ["Виски", "Сироп попкорн", "Содовая"]}}/>
                    <Image src={ShisoSpritz} alt={"Shiso Spritz"} text={"Shiso Spritz"}
                           description={{options: ["Кордиал", "Шисо", "Каламанси", "Лимончелло", "Просекко"]}}/>
                    <Image src={SpicyMango} alt={"Spicy Mango"} text={"Spicy Mango"}
                           description={{options: ["Ром", "Манго", "Корица", "Кокосовые сливки"]}}/>
                    <Image src={Shibu} alt={"Shibu"} text={"Shibu"}
                           description={{options: ["Киви", "Матча", "Юдзу", "Просекко"]}}/>
                    <Image src={PassionSour} alt={"Passion Sour"} text={"Passion Sour"}
                           description={{options: ["Виски", "Маракуйя", "Красный перец", "Сахар", "Лимон"]}}/>
                    <Image src={ShioriNight} alt={"Shiori Night"} text={"Shiori Night"}
                           description={{options: ["Виски", "Сироп попкорн", "Содовая"]}}/>
                    <Image src={UmeMartini} alt={"Ume Martini"} text={"Ume Martini"}
                           description={{options: ["Японское сливовое вино", "Джин", "Шардоне", "Экстракт ванили", "Обратной сферификации сливы в виде желтка"]}}/>
                    <Image src={LycheeGimlet} alt={"Lychee Gimlet"} text={"Lychee Gimlet"}
                           description={{options: ["Джин", "Личи", "Лайм", "Сахар"]}}/>
                    <Image src={LadyInRed} alt={"Lady in Red"} text={"Lady in Red"}
                           description={{options: ["Джин", "Кальвадос", "Кордиал", "Драгонфрут"]}}/>
                </div>
            </div>
            <div id="contact"></div>
        </main>
    );
}