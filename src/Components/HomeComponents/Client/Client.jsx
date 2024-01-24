
import PropTypes from 'prop-types'; // ES6

const Client = ({ client }) => {
    const { name, message, image } = client
    return (
        <div>
            <div className='p-4 w-[250px] flex flex-col justify-center items-center gap-3 text-center'>
                <img src={image} alt={image} className='h-[200px] w-[200px] rounded-full' />
                <p className='font-semibold text-2xl'>{name}</p>
                <p> <div className="rating mx-auto">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#e5c466]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#e5c466]"
           
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#e5c466] "
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#e5c466]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#e5c466]"
                readOnly
              />
            </div></p>

                <p className='text-sm font-gray-600 italic'>{`"${message}"`}</p>

            </div>
        </div>
    );
};

Client.propTypes={
    client: PropTypes.object.isRequired
}
export default Client;