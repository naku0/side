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

export const Image = ({src, alt, text, description}) => {
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