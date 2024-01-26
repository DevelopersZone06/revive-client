const Loading = () => {
  return (
    <div className="px-[2%] sm:px-[5%] lg:px-[8%] py-28">
      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div className="primary-bg md:w-[400px] md:h-[300px]  h-full w-full rounded-lg "></div>
        <div className="primary-bg md:w-[400px] md:h-[300px] h-full w-full rounded-lg "></div>
        <div className="primary-bg md:w-[400px] md:h-[300px] h-full w-full rounded-lg "></div>
      </div>
    </div>
  );
};

export default Loading;
