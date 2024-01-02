import React from 'react';
import Image from '../../assets/homepageImage/images.png';

const Cards = () => {
  const cardStyle = {
    width: '18rem',
    border: '2px solid #ccc',
    margin: '10px',
  };

  return (
    <div className="container">
      {[1, 2, 3].map((rowNumber) => (
        <div className="row flex-row" key={rowNumber} style={{ display: 'inline-flex' }}>
          {[1, 2, 3].map((colNumber) => (
            <div className="col" key={colNumber}>
              <div className="card" style={cardStyle}>
                <img src={Image} className="card-img-top" alt={`Card ${rowNumber}-${colNumber}`} />
                <div className="card-body">
                  <h5 className="card-title">Card title {rowNumber}-{colNumber}</h5>
                  <p className="card-text">
                    This is a simple card
                    <span className="plus-sign">+</span>

                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Cards;
