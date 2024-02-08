import { Link } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const AdminHome = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];

  const COLORS = ["#8ce3ed", "#26C6DA", "#00ACC1"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="grid md:grid-cols-2 gap-10 grid-cols-1 normal">
      {/* 1st div */}
      <div
        className="rounded-md "
        style={{
          background:
            "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
        }}
      >
        <h1 className="text-sky-300 text-2xl mx-10 pt-5 font-semibold normal">
          All Users
        </h1>
        <div className=" rounded-md flex items-center md:flex-row flex-col">
          {/* Pie chart with logo */}
          <div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          {/* logo */}
          <div className="flex flex-col ">
            <div className="flex  items-center gap-3">
              <div className="w-3 h-3 bg-[#00ACC1]"></div>
              <span className="text-sky-50">Normal Users</span>
            </div>
            <div className="flex  items-center gap-3">
              <div className="w-3 h-3 bg-[#26C6DA]"></div>
              <span className="text-sky-50">Paid Users</span>
            </div>
            <div className="flex  items-center gap-3">
              <div className="w-3 h-3 bg-[#8ce3ed] "></div>
              <span className="text-sky-50">Trainers</span>
            </div>
          
          </div>
        </div>
        <div className=" text-center ">
              <Link
                to={"/dashboard/allUsers"}
                className="underline text-sky-50 hover:text-sky-200"
              >
                All Users
              </Link>
            </div>
      </div>

      {/* 2nd div of applied trainers */}
      <div
        className="rounded-md px-4"
        style={{
          background:
            "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg font-semibold">
              <tr className="text-white text-center">
                <th className="text-sky-300 ">All Trainers</th>
                <th>Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody className="text-sky-100">
              {/* row 1 */}
              <tr className="text-center">
                <td>
                  <img
                    className="w-[60px] rounded-full h-[60px] bg-slate-500 object-cover  duration-500"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt=""
                  />
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Yoga</td>
              </tr>
              {/* row 2 */}
              <tr className="text-center">
                <td>
                  <img
                    className="w-[60px] rounded-full h-[60px] bg-slate-500 object-cover  duration-500"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt=""
                  />
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Gym</td>
              </tr>
              {/* row 3 */}
              <tr className="text-center">
                <td>
                  <img
                    className="w-[60px] rounded-full h-[60px] bg-slate-500 object-cover  duration-500"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt=""
                  />
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Yoga</td>
              </tr>
              <hr />
            </tbody>
            {/* foot */}
          </table>
          <div className="my-2 text-center">
              <Link
                to={"/dashboard/toBeTrainers"}
                className="underline text-sky-50 hover:text-sky-200"
              >
                Applied Trainers
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
