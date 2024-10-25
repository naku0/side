import { Image } from "./Image";

export const CocktailCard = ({ cocktail }) => {
    return (
        <div className="cocktail__card">
            <Image src={cocktail.src} alt={cocktail.alt} text={cocktail.text} description={cocktail.description} />
        </div>
    );
};