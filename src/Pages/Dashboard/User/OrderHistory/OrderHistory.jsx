import { useEffect, useState } from "react";
import OrderHistoryCard from "./OrderHistoryCard";

const OrderHistory = () => {

    const [orders, setOrders] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <>
            <h3 className="text-center font-semibold text-white text-3xl border-b-2 pb-6">Order History</h3>
            <div className="text-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-white">
                            <tr>
                                <th className="text-lg font-semibold">Name</th>
                                <th className="text-lg font-semibold">Trainer</th>
                                <th className="text-lg font-semibold">Puchase date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <OrderHistoryCard key={index} order={order}></OrderHistoryCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OrderHistory;