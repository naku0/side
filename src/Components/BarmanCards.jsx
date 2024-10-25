import barmen from "../pics/IMG_8108-round.webp"
import barmen2 from "../pics/1729611246141.webp"

const BarmanData = [
    {
        id: 1,
        name: "Рахим",
        experience: "5 лет",
        places: ["Lotte Hotel", "Marriott", "Buro Tsum", "City Space Bar"],
        imgSrc: barmen,
    },
    {
        id: 2,
        name: "Ярослав",
        experience: "8 лет",
        places: ["Buro Tsum", "Sixty"],
        imgSrc: barmen2,
    },
];


export const BarmanCard = ({ barman }) => {
    return (
        <div className="card">
            <img src={barman.imgSrc} alt={barman.name} />
            <div className="card--info">
                <p className="card--name">{barman.name}</p>
                <div className="card--description">
                    <p>Опыт работы: {barman.experience}</p>
                    <p>{barman.places.join(", ")}</p>
                </div>
            </div>
        </div>
    );
};

export const BarmanCards = () => {
    return (
        <div className="info-container">
            {BarmanData.map((barman) => (
                <BarmanCard
                    key={barman.id}
                    barman={barman}
                />
            ))}
        </div>
    );
};

