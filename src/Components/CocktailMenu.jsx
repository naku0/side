import {CocktailCard} from "./CocktailCard";

export const CocktailMenu = ({ cocktails, showMenu, setShowMenu }) => {
    return (
        <div id="menu" className="menu">
            <h1>Коктейльная карта</h1>
            <div className={showMenu ? "menu__grid" : "menu__grid__hidden"}>
                {cocktails.slice(0, showMenu ? cocktails.length : 3).map((cocktail, index) => (
                    <CocktailCard key={index} cocktail={cocktail} />
                ))}
                {cocktails.length > 3 && (
                    <div className="cocktail__card">
                        <p>Некоторые напитки Вы можете найти и попробовать
                            в ресторане <span className="important">OVO (Michelin guide)</span> и <span
                                className="important">Lobby Lounge Bar</span> при отеле <span className="important">Lotte Hotel Moscow</span>.</p>
                        {showMenu ? (
                            <button onClick={() => setShowMenu(false)}>Спрятать</button>
                        ) : (
                            <button onClick={() => setShowMenu(true)}>Ознакомиться подробнее</button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};