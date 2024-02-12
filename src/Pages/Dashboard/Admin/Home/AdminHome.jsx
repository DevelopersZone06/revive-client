import { Link } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid } from 'recharts';
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

  
const colors = ['#0088FE'];

const data2 = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
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
                className="underline text-sky-50 hover:text-sky-200 hover:font-semibold"
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
                    src="https://i.ibb.co/1sZ16Lj/gym39.webp"
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
                    src="https://i.ibb.co/BVTvjn6/fashion-portrait-attractive-smiling-man-white-shirt-poses-wall-with-contrast-shadows.jpg"
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
                    src="https://i.ibb.co/GRsmKyJ/portrait-beautiful-young-adult-white-happy-woman-white-wall.jpg"
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
                className="underline text-sky-50 hover:text-sky-200 hover:font-semibold"
              >
                Applied Trainers
              </Link>
            </div>
        </div>
      </div>

       {/* 3nd div of applied trainers */}
       <div
       className="rounded-md px-8  "
       style={{
         background:
           "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
       }} 
       >
       <div className="my-4">
       
         <div className="my-2 text-center   p-4" style={{background:'linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(9,99,121,1) 100%, rgba(4,135,162,1) 100%)'}}  >
         <div className="flex items-center justify-between text-sky-100">
         <div>
         <h1 className="font-semibold text-lg">Advanced</h1>
         <p>VIP Assistance,
         Exclusive Trainer Access</p>
         </div>
          <p>Price: $ 99.99</p>
         </div>
        
       </div>
      
       
     </div>
       <div className="my-4">
       
         <div className="my-2 text-center bg-sky-300  p-4" style={{background:'linear-gradient(90deg, rgba(4,69,84,1) 0%, rgba(59,176,201,1) 100%)'}} >
         <div className="flex items-center justify-between text-sky-100">
         <div>
         <h1 className="font-semibold text-lg">Premium</h1>
         <p>Elevated Experience
         Engage And Share
         </p>
         </div>
          <p>Price: $ 39.99</p>
         </div>
        
       </div>
      
       
     </div>
       <div className="my-4">
       
         <div className="my-2 text-center bg-sky-800  p-4" style={{background:'linear-gradient(90deg, rgba(31,150,177,1) 0%, rgba(167,215,225,1) 100%)'}}  >
         <div className="flex items-center justify-between text-sky-100">
         <div>
         <h1 className="font-semibold text-lg">Basic</h1>
         <p>Personalized Guidance
         Become A Trainer</p>
         </div>
          <p>Price: $ 19.99</p>
         </div>
        
       </div>
      
       
     </div>
    <div className="text-center mb-5">
    <Link
    to={"/dashboard/postGallery"}
    className="underline text-sky-50  hover:text-sky-200 hover:font-semibold"
  >
    Post Packages
  </Link>
    </div>
       </div>

       <div className="rounded-md py-10  "
       style={{
         background:
           "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
       }}>
       <h1 className="text-center text-sky-50 font-semibold pb-10">Revenue</h1>
       <BarChart
       width={500}
       height={300}
       data={data2}
       margin={{
         top: 20,
         right: 30,
         left: 20,
         bottom: 5,
       }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Bar dataKey="uv" fill="#26C6DA" shape={<TriangleBar />} label={{ position: 'top' }}>
         {data.map((entry, index) => (
           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
         ))}
       </Bar>
     </BarChart>
       </div>
    </div>
  );
};

export default AdminHome;
