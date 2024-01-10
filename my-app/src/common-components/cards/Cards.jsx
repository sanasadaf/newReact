import React from 'react';
import './Cards.css'
const Cards = ({ data }) => {
  return (
    <div className="container">
            <div className="col" key="456">
              <div className="card">
              <img src={data.image} className="card-img-top" alt={`Card ${data.id}`} />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-price">
                  Price: ${data.price}
                    <span className="plus-sign">+</span>
                  </p>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Cards;
