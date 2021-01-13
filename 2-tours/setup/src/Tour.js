import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [more, setMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {more ? info : `${info.substring(0, 100)}...`}
          <button type="button" onClick={() => setMore(!more)}>
            {
              more ? 'show less' : 'read more'
            }
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not intrested</button>
      </footer>
    </article>
  );
};

export default Tour;
