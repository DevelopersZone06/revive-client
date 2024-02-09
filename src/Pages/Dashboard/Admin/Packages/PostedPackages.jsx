const PostedPackages = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr className="text-white">
              <th>Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Update Packages</th>
            </tr>
          </thead>
          <tbody className="text-sky-100">
            {/* row 1 */}
            <tr>
              <td>Advanced</td>
              <td>$ 99.99</td>
              <th>
                <td>9 Months </td>
              </th>
              <th >
                
                {/* The button to open modal */}
                <label
                  htmlFor="my_modal_7"
                  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out" 
                >
                  Update
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box" >
                 <div className="flex flex-col  items-center justify-center"  style={{
                    background:
                      "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                  }}>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Package Type</span>
                  
                 </div>
                 <input type="text" name="packageType" placeholder="Package Type" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Price</span>
                  
                 </div>
                 <input type="text" name="price"  placeholder="Price" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Duration</span>
                  
                 </div>
                 <input type="text" name="duration" placeholder="Duration" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
               <button className="bg-sky-100 hover:bg-sky-200  w-1/2 mb-5 py-2 px-3 flex justify-center  rounded-xl text-sky-900 hover:text-blue-950 hover:font-bold ease-in-out">Update</button>
                 </div>
                   
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Premium</td>
              <td>$ 39.99</td>
              <th>
                <td>6 Months </td>
              </th>
              <th >
                
                {/* The button to open modal */}
                <label
                  htmlFor="my_modal_7"
                  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out" 
                >
                  Update
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box" >
                 <div className="flex flex-col  items-center justify-center"  style={{
                    background:
                      "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                  }}>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Package Type</span>
                  
                 </div>
                 <input type="text" name="packageType" placeholder="Package Type" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Price</span>
                  
                 </div>
                 <input type="text" name="price"  placeholder="Price" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Duration</span>
                  
                 </div>
                 <input type="text" name="duration" placeholder="Duration" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
               <button className="bg-sky-100 hover:bg-sky-200  w-1/2 mb-5 py-2 px-3 flex justify-center  rounded-xl text-sky-900 hover:text-blue-950 hover:font-bold ease-in-out">Update</button>
                 </div>
                   
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Basic</td>
              <td>$ 19.99</td>
              <th>
                <td>3 Months </td>
              </th>
              <th >
                
                {/* The button to open modal */}
                <label
                  htmlFor="my_modal_7"
                  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out" 
                >
                  Update
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box" >
                 <div className="flex flex-col  items-center justify-center"  style={{
                    background:
                      "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                  }}>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Package Type</span>
                  
                 </div>
                 <input type="text" name="packageType" placeholder="Package Type" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Price</span>
                  
                 </div>
                 <input type="text" name="price"  placeholder="Price" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
                 <label className="form-control w-full mb-4 max-w-xs">
                 <div className="label">
                   <span className="label-text text-sky-50">Duration</span>
                  
                 </div>
                 <input type="text" name="duration" placeholder="Duration" className="input text-sm input-bordered w-full h-10 max-w-xs" />
                 
               </label>
               <button className="bg-sky-100 hover:bg-sky-200  w-1/2 mb-6 py-2 px-3 flex justify-center  rounded-xl text-sky-900 hover:text-blue-950 hover:font-bold ease-in-out">Update </button>
                 </div>
                   
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </th>
            </tr>
            <hr />
          </tbody>
          {/* foot */}
        </table>
        <div className="flex justify-around">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PostedPackages;
