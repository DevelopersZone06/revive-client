

const UserProfile = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row gap-8">
          {/* right side */}
          <div className="w-2/3 ">
            <div className="flex flex-row justify-evenly   items-center">
              <h1 className="text-2xl p-4 w-full font-bold text-left from-sky-600  via-sky-200 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">My Profile</h1>
            
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
              <div className="modal" role="dialog" style={{ padding: "100px" }}>
                <div className="modal-box p-2 rounded-lg " >
                  <div className="flex flex-col py-5 rounded-lg   items-center justify-center" style={{
                    background:
                      "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                  }}>
                    <form className="max-w-[70%] mx-auto  ">
                      <div className="flex lg:flex-row my-5 md:flex-row flex-col gap-10 items-center">
                        <div className="relative z-0 w-full  group">
                          <input
                            type="text"
                            name="title" value={'Nipi'}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Full Name
                          </label>
                        </div>
                        <div className="relative z-0 w-full  group">
                          <input
                            type="text"
                            name="title" value={'ishrat12@gmail.com'}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="flex lg:flex-row   md:flex-row flex-col gap-10 items-center py-10">
                        <div className="relative z-0 w-full mb-5 group">
                          <input
                            type="text"
                            name="title" value={'01823468392'}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Phone Number
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                          <input
                            type="text"
                            name="title" value={'Experience'}
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Experience
                          </label>
                        </div>
                      </div>




                    </form>
                    <button className="text-white border border-white hover:scale-125 transition-all ease-in-out my-3 bg-sky-50 hover:bg-sky-50focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                      style={{
                        background:
                          "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                      }}>Update</button>
                  </div>

                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className="h-[1px]  w-full bg-gradient-to-tr from-teal-400 via-sky-100 to-sky-600"> </div>
            <div className="text-sky-200 font-semibold">
 
              <form className="max-w-[70%] mx-auto">
                <div className="flex lg:flex-row my-5 md:flex-row flex-col gap-10 items-center">
                  <div className="relative z-0 w-full  group">
                    <input
                      type="text"
                      name="title" value={'Nipi'}
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Full Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full  group">
                    <input
                      type="text"
                      name="title" value={'ishrat12@gmail.com'}
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email
                    </label>
                  </div>
                </div>
                <div className="flex lg:flex-row  md:flex-row flex-col gap-10 items-center my-5">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="title" value={'01823468392'}
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Phone Number
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="title" value={'Experience'}
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Experience
                    </label>
                  </div>
                </div>




              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserProfile;

