import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCart = ({service}) => {
    const { _id , img , title , price } = service ;



    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-xl text-orange-500 font-bold">Price : $ {price}</p>
                   <Link to={`services/${_id}`}><FaArrowRight className='text-orange-500 text-2xl'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;