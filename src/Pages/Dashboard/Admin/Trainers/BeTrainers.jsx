const ToBeTrainers = () => {
    return (
       <>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th></th>
              <th>Name</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td>
                <div className="items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src="https://i.ibb.co/B4YPD5L/download-1.jpg" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
          
        </table>
      </div>
      
       </>
    );
};

export default ToBeTrainers;