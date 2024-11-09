import "../stylings/Image.css";
const returnOptions = (description) => {
    return (
        <ul className="image__ul">
            {description.description.options.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
        </ul>
    );
};

export const ImageWithDescription = ({src, alt, text, description}) => {
    return (
        <div className="image">
            <div className="image__description">
                <h2>{text}</h2>
                {returnOptions({description})}
            </div>
            <img src={src} alt={alt}/>
        </div>
    );
}

export const Image =({cocktail}) => {
    const {src, alt, description} = cocktail;
    return (
        <>
        <div className="showcase">
            <img src={src} alt={alt}/>
        </div>
        <div className="showcase-text">
            <p>{alt}</p>
            <ul>
                {description.options.map((option, index) =>
                    <li key={index}>{option}</li>
                )}
            </ul>
        </div>
        </>
    );
}