

const BookingDetails = ({bookedDetails , handleDeleteBookItem , handleConfirm }) => {
    // console.log(bookedDetails);
    const { _id , date , img , service , balance , status } = bookedDetails ;
    return (
    <tr>
        <th>
            <button onClick={ ()=> handleDeleteBookItem(_id)} className="btn btn-sm btn-circle btn-outline">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {
                  img && <img
                  src = {img}
                  alt="Image not found"
                />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
           {date}
        </td>
        <td>{balance}</td>
        <th>
         {status === "confirm" ? <span className="text-primary font-bold">Confirmed</span> : <button onClick={() => handleConfirm(_id) } className="btn btn-ghost btn-xs">Confirm</button>}
        </th>
      </tr>          
    );
};

export default BookingDetails;