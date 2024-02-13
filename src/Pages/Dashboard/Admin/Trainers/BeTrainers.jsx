import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import Title from "../../../../Shared/Title";
import { Helmet } from "react-helmet-async";
const ToBeTrainers = () => {
  return (
    <>
      <Helmet>
        <title>
          Revive | Trainers application
        </title>
      </Helmet>
      <Title subHeading={"Applied for Trainers"} fontColor={'sky-50'}></Title>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-semibold text-center">
            <tr className="text-white text-center">
              <th>Trainer Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="text-sky-100">
            {/* row 1 */}
            <tr className="text-center">

              <td className="flex justify-center items-center">

                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/1sZ16Lj/gym39.webp" alt="" />



              </td>
              <td>
                Daniel

              </td>
              <td>Yoga</td>
              <th>


                <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
                  <button

                    className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
                  >
                    Details
                  </button>
                </Link>
              </th>
            </tr>
            {/* row 2 */}
            <tr className="text-center">

              <td className="flex justify-center items-center">

                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/BVTvjn6/fashion-portrait-attractive-smiling-man-white-shirt-poses-wall-with-contrast-shadows.jpg" alt="" />



              </td>
              <td>
                Emily Clark

              </td>
              <td>Nutrition</td>
              <th>


                <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
                  <button

                    className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out"
                  >
                    Details
                  </button>
                </Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr className="text-center">

              <td className="flex justify-center items-center">

                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/GRsmKyJ/portrait-beautiful-young-adult-white-happy-woman-white-wall.jpg" alt="" />



              </td>
              <td>
                Brand Taylor

              </td>
              <td>WorkOut</td>
              <th>


                <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
                  <button

                    className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
                  >
                    Details
                  </button>
                </Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr className="text-center">

              <td className="flex justify-center items-center">

                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/yg10Mg5/portrait-smiling-young-male-athlete-standing-race-track.jpg" alt="" />



              </td>
              <td>
                David Smith

              </td>
              <td>Weight Loss</td>
              <th>


                <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
                  <button

                    className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
                  >
                    Details
                  </button>
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr className="text-center">

              <td className="flex justify-center items-center">

                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/9VK5fFx/download.jpg" alt="" />



              </td>
              <td>
                Khatun Hasan

              </td>
              <td>Nutrition</td>
              <th>


                <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
                  <button

                    className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
                  >
                    Details
                  </button>
                </Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr className="text-center">

              <td className="flex justify-center items-center">

                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://i.ibb.co/yyqYXZK/download-2.jpg" alt="" />



              </td>
              <td>
                Rose Mith

              </td>
              <td>Cardio</td>
              <th>


                <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
                  <button

                    className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
                  >
                    Details
                  </button>
                </Link>
              </th>
            </tr>

            <hr />
          </tbody>
          {/* foot */}


        </table>
        <div className="flex justify-around mt-4">
          <div>

          </div>
          <div className="flex gap-2 items-center text-sky-100">
            <h2>Rows Per Page</h2>
            <p className="flex items-center">5 <IoMdArrowDropdown className="w-[22px]" /></p>
            <h1 className="text-lg">1-3 of 9</h1>
            <IoIosArrowBack className="w-[25px]" />
            <IoIosArrowForward className="w-[25px]" />
          </div>
        </div>
      </div>

    </>
  );
};

export default ToBeTrainers;