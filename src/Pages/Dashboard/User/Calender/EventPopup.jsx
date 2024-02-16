// import { useState } from "react";


// const EventPopup = ({ onAddEvent }) => {
//     const [eventName, setEventName] = useState("");
//   const [eventDate, setEventDate] = useState("");
 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newEvent = {
//       name: eventName,
//       date: new Date(eventDate).getTime(), // Assuming eventDate is in YYYY-MM-DD format
//       // Add other properties as needed
//     };
//     onAddEvent(newEvent);
//     setEventName("");
//     setEventDate("");
    
//   };
//     return (
//         <>
//              <div className="my-5 mx-auto" >
//         <label
//           htmlFor="my_modal_7"
//           className=" rounded-xl px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all hover:scale-105 duration-300"
//         >
//           Add Your Own Events
//         </label>
//       </div>
//       {/* Put this part before </body> tag */}
//       <input
//         type="checkbox"
//         id="my_modal_7"
//         className="modal-toggle"
//       />
//       <div className="modal my-3" role="dialog">
//         <div className="modal-box" >
//           <div className="flex flex-col  items-center justify-center">
           
//            <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
//                   Event Name
//                 </label>
//                 <input
//                   className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="eventName"
//                   type="text"
//                   placeholder="Event Name"
//                   value={eventName}
//                   onChange={(e) => setEventName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDate">
//                   Event Date
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="eventDate"
//                   type="date"
//                   value={eventDate}
//                   onChange={(e) => setEventDate(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all hover:scale-105 duration-300"
//                   type="submit"
//                 >
//                   Add Event
//                 </button>
//               </div>
//             </form>
           
//           </div>

//         </div>
//         <label className="modal-backdrop" htmlFor="my_modal_7">
//           Close
//         </label>
//       </div>
//         </>
//     );
// };

// export default EventPopup;