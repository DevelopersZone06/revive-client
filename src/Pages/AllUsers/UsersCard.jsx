
const UsersCard = ({user}) => {

    const {email, name, category} = user || {}; 

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://i.ibb.co/gM3rG8G/beautiful-woman-park-last-sunny-days.jpg" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name ? name : 'Yancy Tear' }</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{category}</span>
                </td>
                <th>
                    <button className="btn btn-neutral btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default UsersCard;