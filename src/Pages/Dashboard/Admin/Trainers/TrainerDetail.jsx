import { FaSlackHash } from "react-icons/fa";

const TrainerDetail = () => {
    return (
        <><div className="text-sky-50 flex gap-5">
            <img src="https://i.ibb.co/1sZ16Lj/gym39.webp" alt="" className="w-[400px] object-cover rounded transition-all duration-200 hover:scale-105" />
            <div className="space-y-2">
                <h1 className="capitalize text-2xl">Name : Jona Martha</h1>
                <p className="capitalize text-lg">Home Town : Dhaka</p>
                <p className="capitalize text-base">Age : 24</p>
                <div className="py-5">
                    <h2>Years Of Experience : 4</h2>
                </div>
                <div>
                    <button className="rounded-full px-5 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out ml-4">Accept</button>
                    <button className="rounded-full px-5 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-base text-sm  transition-all duration-150 ease-in-out ml-5">Reject</button>
                </div>
            </div>

        </div>
            <div className="mt-4">
                <p className="text-sky-50 py-7 leading-8">Hey there! I'm Anastasiia Oleksiivna Kamenskykh, your dedicated fitness coach at Revive. My journey into the world of
                    fitness began with a passion for health and a desire to inspire others to lead a more active lifestyle. Growing up, I was
                    always drawn to sports and physical activities. Whether it was playing soccer with friends or hitting the gym, I found joy
                    in the movement and the sense of accomplishment that comes with a good workout.My formal education in Physical
                    Education equipped me with the knowledge of anatomy, physiology, and nutrition the pillars of a holistic approach to fitness.</p>
                
                <h1 className="text-3xl font-semibold pb-7 text-sky-50">My Achivements --</h1>

                <div className="space-y-2">
                    <p className="flex gap-2 text-sky-100">
                        <FaSlackHash className="w-[20px] text-sky-200" />Achieved High Student Retention Rates and Academic Improvement</p>

                    <p className="flex gap-2 text-sky-100">
                        <FaSlackHash className="w-[20px] text-sky-200" />Successfully Integrated Technology for Enhanced Learning Experiences</p>
                    <p className="flex gap-2 text-sky-100">
                        <FaSlackHash className="w-[20px] text-sky-200" />Implemented Inclusive Teaching Practices Recognized at National Level</p>
                    <p className="flex gap-2 text-sky-100">
                        <FaSlackHash className="w-[20px] text-sky-200" />Mentored Students Achieving Notable Success in Academic Competitions</p>
                </div>
               
                <div className="grid gap-x-6 md:grid-cols-2 lg:gap-x-12 mt-10 ">
      <div className="mb-24 md:mb-0">
        <div
          className="block h-full rounded-lg "  style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
          }} >
         
          <div className="p-6 text-sky-50">
            <h5 className="mb-4 text-lg font-bold">Available in weeks :</h5>
            <p className="text-sky-100">1.Sunday</p>
                    <p className="text-sky-100">2.Monday</p>
                    <p className="text-sky-100">3.Thursday</p>
                    <p className="text-sky-100"> 4. Friday</p>
            
          </div>
        </div>
      </div>
      <div className="mb-24 md:mb-0">
        <div
          className="block h-full rounded-lg "  style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
          }} >
         
          <div className="p-6 text-sky-50">
            <h5 className="mb-4 text-lg font-bold">Available slots :</h5>
            <p className="text-sky-100">1.8am-9am</p>
                    <p className="text-sky-100">2.10am-11am</p>
                    <p className="text-sky-100">3.11am-12am</p>
                    <p className="text-sky-100"> 4. 5pm-6pm</p>
            
          </div>
        </div>
      </div>

      
     
    </div>

            </div>
        </>

    );
};

export default TrainerDetail;