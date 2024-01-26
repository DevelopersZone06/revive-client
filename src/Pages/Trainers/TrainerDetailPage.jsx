const TrainerDetailPage = () => {
  return (
    <>
      <div className="flex gap-14 bg-[#74b39c76] rounded-xl my-20 h-[80vh] shadow-lg max-w-[1600px] mx-auto">
        <div className="w-[30%] ps-5">
          <div
            style={{
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nastya_photoshooting_at_Laima_Rendez_Vous_Jurmala_2017_%28cropped%29.jpg/640px-Nastya_photoshooting_at_Laima_Rendez_Vous_Jurmala_2017_%28cropped%29.jpg')",
            }}
            className="rounded-b-[50%] rounded-xl opacity-95 shadow-xl text-center text-black text-xl font-semibold h-[50%] bg-cover "
          >
            <p>Position: Wellness Coach </p>
            <p>Education: Standford University</p>
            <p>Home Town: UK</p>
            <p>Age: 24yrs</p>
          </div>
          <div className="my-20 ms-10 flex gap-4 flex-col bg-[#74b39c76] rounded-xl p-4 shadow-lg">
            <button className="btn w-[60%] shadow-xl text-black bg-[#74b39c76] mx-auto border-[#373e3c] hover:bg-[#373e3c] hover:text-white border-2">Hire</button>
            <button className="btn w-[60%] text-black shadow-xl bg-[#74b39c76] mx-auto border-[#373e3c] hover:bg-[#373e3c] hover:text-white border-2">Contact</button>
            <button className="btn w-[60%] text-black shadow-xl bg-[#74b39c76] mx-auto border-[#373e3c] hover:bg-[#373e3c] hover:text-white border-2">curriculum</button>
            <button className="btn w-[60%] text-black shadow-xl bg-[#74b39c76] mx-auto border-[#373e3c] hover:bg-[#373e3c] hover:text-white border-2">Error</button>
          </div>
        </div>
        <div>
          <div className="text-start bg-[#74b39c76] py-7 w-[96%] ps-7 rounded-xl shadow-xl my-10">
            <p className="text-xl font-semibold">
              Dedicated to clients health and fitness. she will take care of
              your health as much as <br /> she can. She is one of the best
              trainer here.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#74b39c76] py-10 p-3 rounded-xl shadow-xl">
              <h4 className="text-center pb-6 text-2xl font-semibold">Goals</h4>
              <li className="pb-3">
                Foster Critical Thinking Skills in Students
              </li>
              <li className="pb-3">Cultivate a Love for Lifelong Learning</li>
              <li className="pb-3">
                Promote Inclusivity and Diversity in the Classroom
              </li>
              <li>Instill a Growth Mindset Among Students.</li>
            </div>
            <div className="bg-[#74b39c76] py-10 p-3 rounded-xl shadow-xl">
              <h4 className="text-center pb-6 text-2xl font-semibold">
                Achivements
              </h4>
              <li className="pb-3">
                Achieved High Student Retention Rates and Academic Improvement
              </li>
              <li className="pb-3">
                Successfully Integrated Technology for Enhanced Learning
                Experiences
              </li>
              <li className="pb-3">
                Implemented Inclusive Teaching Practices Recognized at National
                Level
              </li>
              <li>
                Mentored Students Achieving Notable Success in Academic
                Competitions
              </li>
            </div>
          </div>
          <div className="text-start py-7 w-[96%] bg-[#74b39c76] ps-2 text-lg rounded-xl shadow-xl my-10">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos soluta praesentium non, similique veritatis <br />{" "}
              maiores quidem neque, maxime voluptas sunt dolorem in ut, dicta
              dolorum excepturi ad est numquam ipsam. Lorem <br />
              ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              aperiam tenetur quos pariatur velit fugit sed! Harum vero enim
              accusamus.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerDetailPage;
