import React from 'react';

const GiftGridItem = ({ id, title, img }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GiftGridItem;
