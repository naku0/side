import React, {useState} from 'react';
import {CocktailCard} from './CocktailCard';
import {cocktails} from './CocktailList';
import {ReactComponent as ArrowForward} from "../icons/arrow_forward_ios_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as ArrowBack} from "../icons/arrow_back_ios_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

export const CocktailCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cocktails.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cocktails.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="cocktail__carousel">
            <button className="carousel__button prev" onClick={handlePrev}>
                <ArrowBack style={{fill: "var(--black)"}}/>
            </button>
            <div className="carousel__track">
                <div className="carousel__slide">
                    <CocktailCard cocktail={cocktails[currentIndex]}/>
                </div>
            </div>

            <button className="carousel__button next" onClick={handleNext}>
                <ArrowForward style={{fill: "var(--black)"}}/>
            </button>
        </div>
    );
};