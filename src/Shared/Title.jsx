

const Title = ({heading,subHeading}) => {
    return (
        <div className="my-20 text-center space-y-3 ">
          <h1 className="heading text-3xl headings ">{subHeading}</h1> 
          <h1 className="normal text-6xl font-bold">{heading}</h1>
        </div>
    );
};

export default Title;