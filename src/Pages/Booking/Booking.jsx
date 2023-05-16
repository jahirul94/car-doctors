import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingDetails from "./BookingDetails";

const Booking = () => {
  const [ stateChange , setStateChange ] = useState(false)
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5000/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url , {
       method : "GET",
       headers :{
        authorization : `Bearer ${localStorage.getItem('car-doctor-token')}`
       }
    })
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, [stateChange]);


  const handleDeleteBookItem = id => {
        fetch(`http://localhost:5000/booking/${id}`,{
                method :"DELETE"
            })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0 ){
                setStateChange(!stateChange)
                alert('User Delete Successfully')
            }
          })}

        //   update 
    const handleConfirm = id =>{
          fetch(`http://localhost:5000/booking/${id}` , {
             method:"PATCH",
             headers:{
                'content-type' : 'application/json'
             },
             body : JSON.stringify({status : "confirm"})
          })
          .then(res => res.json())
          .then(data => {
             console.log(data);
             if(data.modifiedCount > 0 ){
                 window.alert("Confirmed This Service ")
                 setStateChange(!stateChange)
             }
          })
      }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
              {
                booking.map( bookedDetails => <BookingDetails key={bookedDetails._id} bookedDetails={bookedDetails}
                handleDeleteBookItem = {handleDeleteBookItem}
                handleConfirm = { handleConfirm }    
                 ></BookingDetails>)
              }
          </tbody> 
        </table>
      </div>
    </div>
  );
};

export default Booking;
