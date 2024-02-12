
const OrderHistoryCard = ({order}) => {

    const {name, trainerName, purchaseDate} = order || {}; 

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{trainerName}</td>
                <td>{purchaseDate}</td>
            </tr>
        </>
    );
};

export default OrderHistoryCard;