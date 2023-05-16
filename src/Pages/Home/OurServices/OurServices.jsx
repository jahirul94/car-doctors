import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const OurServices = () => {
    const [ services , setServices ] = useState([]);
    useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data))
    },[])
    return (
        <div> 
             <div className="text-center my-4 space-y-3">
                  <h2 className="text-2xl text-orange-500 font-bold">Service</h2>
                  <h1 className="text-5xl font-bold">Our Service Area</h1>
                  <p className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which do not look even slightly believable. </p>
             </div>
             <div className="lg: grid grid-cols-3 gap-6"> 
                  {
                    services.map(service => <ServiceCart key={service._id} service = {service}></ServiceCart>)
                  }
             </div>
            
        </div>
    );
};

export default OurServices;