import React from 'react';

const HotelCard = ({ name, availableRooms, imageUrl, price }) => {
  return (
    <div className="card mt-5" style={{ width: '18rem' }}>
      <img
        className=" img-fluid"
        src={imageUrl}
        style={{ width: '18rem', height: '100%' }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Some quick Infoemation about the Hotel.</p>
        <h5>
          Available Rooms:
          <span className="text-danger p-1">{availableRooms} rooms</span>
        </h5>
        <h6>
          Price per Night:
          <span className="text-danger p-1"> {price}</span>
        </h6>
      </div>
    </div>
  );
};

export default HotelCard;
