import EventsTitle from "./EventsTitle";


const Events = () => {
    return (
        <div>
            <EventsTitle/>
            <div className="grid grid-cols-3 my-14 gap-5 px-[2%] sm:px-[5%] lg:px-[8%]">
              <div className="text-center space-y-3 cursor-pointer ">
                <img src="https://template.unicoderbd.com/unifit/images/event/event1.jpg" alt="" className="rounded transition delay-150 duration-300 ease-in-out hover:scale-95" />
              
                <h2 className="text-xl font-semibold text-[#448c74] hover:text-black">Reunion With Our X Student</h2>
                <p className="text-wrap py-3">Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.</p>
                
              </div>
            </div>
        </div>
    );
};

export default Events;