import {ImageWithDescription} from "./Image";

export const CocktailCard = ({ cocktail }) => {
    return (
        <div className="cocktail__card">
            <ImageWithDescription src={cocktail.src} alt={cocktail.alt} text={cocktail.text} description={cocktail.description} />
        </div>
    );
};