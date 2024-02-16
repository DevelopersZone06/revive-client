

const Card = ({ card }) => {
    return (
        <div>
            <div  className="bg-sky-50 px-4 py-4 m-2 rounded">{card.content}</div>
        </div>
    );
};

export default Card;