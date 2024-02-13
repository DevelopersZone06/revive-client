import { Helmet } from "react-helmet-async";

const ServicesDetails = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Revive | Services detail
                </title>
            </Helmet>
            <div>
                <h1 className="text-sky-50 text-3xl font-semibold mb-5">Service Details </h1>
            </div>
            <div className="overflow-x-auto">
            
        <table className="table">
        
              
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr className="text-sky-50 text-center rounded" style={{
                background:
                  "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
              }}>
              
              <th>Trainer Image</th>
              <th>Trainer Name</th>
              <th>Service Name</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
           
            {/* row 1 */}
            <tr className="text-sky-100 text-center">
              <td className="flex justify-center items-center">
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/1sZ16Lj/gym39.webp" alt="" />
              </td>
             
              <td> Daniel Harris</td>
              <td>Mood-Boosting Dance</td>
              <td>Workout</td>
              <td>25 days</td>
              <td>$ 79.99</td>
              
            </tr>

          
          </tbody>
          {/* foot */}
        </table>
       
      </div>
        </div>
    );
};

export default ServicesDetails;