import React from 'react';

interface EventCardProps {
  name: string;
  date: string;
  from: string;
  to: string;
  location: string;
  imgUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ name, date, from, to, location, imgUrl }) => (
  <div className="event-card h-322px w-406px d-flex flex-column flex-column align-items-center">
    <div className="h-244px position-relative">
      <img className="event-img h-244px w-406px" src={imgUrl} alt="event"/>
      <div className="fw-7 fs-32 position-absolute bottom-0 left-6 text-common max-w-380px">{name}</div>
    </div>
    <div className="d-flex justify-content-around align-items-center h-100 w-100">
      <div className="d-flex flex-column align-items-center w-33">
        <div>Date</div>
        <div>{date}</div>
      </div>
      <div className="d-flex flex-column align-items-center w-33">
        <div>Time</div>
        <div>{from}~{to}</div>
      </div>
      <div className="d-flex flex-column align-items-center w-33">
        <div>Location</div>
        <div className="text-common max-w-100px">{location}</div>
      </div>
    </div>
  </div>
);

export default EventCard;
