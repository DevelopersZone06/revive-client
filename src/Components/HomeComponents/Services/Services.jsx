import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Title from '../../../Shared/Title';
import ServiceCard from '../../ServicesComponents/Cards/ServiceCard';

import Loading from '../../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const Services = () => {
  const axiosPublic = useAxiosPublic();
  const { data: services, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });
  if (isPending) return <Loading></Loading>;

   
   {/*  const axiosPublic = useAxiosPublic();
  const { data: services, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });
  if (isPending) return <Loading></Loading>; */}
    return (
        <div className='primary-bg px-[2%] sm:px-[5%] lg:px-[8%] py-28'>
            <Title subHeading={"Services"} heading={"Our Some Services"}></Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.slice(0,6).map((service) => (

            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
          {/**All services btn, /services */}

         
        </div>
        <div className=' flex items-center justify-center   pt-8'>
        <Link to='/services'><button className='border-secondary px-10 py-2 rounded-md uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white'>All Services</button> </Link>
    </div>
        </div>
    );

}
export default Services;
