

const Card = ({ card }) => {
    return (
        <div>
            <div className="bg-sky-100 p-2 m-2 rounded">{card.content}</div>
        </div>
    );
};

export default Card;