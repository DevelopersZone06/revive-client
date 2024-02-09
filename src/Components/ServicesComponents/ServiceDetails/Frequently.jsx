import { useState } from "react";


const Frequently = () => {
     // add your array of object data 
     const array=[
        {
 title:'To ensure proactive domination',
 description:'Expound the actual teachings of the great explor-er of the truth, the master-builder of human hap-piness. No one rejects, dislikes, or avoids.'
     },
        {
 title:'To ensure proactive domination',
 description:'Expound the actual teachings of the great explor-er of the truth, the master-builder of human hap-piness. No one rejects, dislikes, or avoids.'
     },
        {
 title:'To ensure proactive domination',
 description:'Expound the actual teachings of the great explor-er of the truth, the master-builder of human hap-piness. No one rejects, dislikes, or avoids.'
     }
    ]

     // toggle state and function 
     const [isOpen, setIsOpen] = useState(null);
     const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    return (
        <div className="flex">
        <div className=" mx-3 w-full md:max-w-[550px] rounded-lg py-10 md:py-20 space-y-6 cursor-pointer">
            {/* maping each accordion  */}
            {array.map((arr, idx) => (
                <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                    {/* the index div  */}
                    <div className="w-16 h-16 bg-sky-800 flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                        <span>0{idx + 1}</span>
                    </div>
                    <div className="w-12 md:w-10 h-[2px] bg-sky-800 relative">
                        <span className="w-2 md:w-3 h-3 bg-white absolute  -left-0 md:-left-2 -top-[5px] z-40 rounded-full border-2 border-sky-800"></span>
                        <span className="bg-[#448c74] w-10 h-1"></span>
                    </div>
                    {/* main accordion div  */}
                    <div>
                        <div className="w-full md:max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-sky-800 relative">
                            <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-sky-800 absolute top-0 right-0"></span>
                            <h1 className="text-[#448c74] text-xl text-center">{arr.title}</h1>
                        </div>
                        <div
                            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sky-600  ${
                                isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-sky-700 text-white p-6 text-center text-sm">
                               {arr.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
    );
};

export default Frequently;