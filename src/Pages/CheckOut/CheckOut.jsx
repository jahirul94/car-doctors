import { useContext } from "react";
import { useLoaderData } from "react-router-dom" ;
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const loadedData = useLoaderData();
    const { title , price , _id , img } = loadedData ;

    const handleBooking = event =>{
         event.preventDefault();
         const form = event.target ;
         const name = form.name.value ;
         const date = form.date.value ;
         const email = form.email.value ;
         const balance = form.balance.value ;
         const booking = {
                customerName : name ,
                email ,
                img ,
                date ,
                balance,
                service : title ,
                service_id : _id 
         }
      fetch('http://localhost:5000/booking' , {
        method : 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify(booking)
      })
      .then( res => res.json())
      .then( data => {
        if(data.insertedId.length > 0 ) {
            alert("Service Added Successfully")
        }
      })
    }

    return (
        <div>
             <h3 className="text-3xl text-center font-bold text-orange-600">Book Service : {title}</h3>
                        <form onSubmit={handleBooking}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" defaultValue={user?.displayName} name="name" placeholder="You're Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Booked Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Balance </span>
                                    </label>
                                    <input type="text" defaultValue={'$ '+ price } name="balance" placeholder="password" className="input input-bordered" />
                                </div>
                             </div>
                                <div className="form-control mt-6">
                                   <input type="submit" className="btn btn-block bg-orange-500 text-white" value="Order Confirm" />
                                </div>
                        </form>
        </div>
                    
    );
};

export default CheckOut;