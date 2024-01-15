import React from 'react';
import { observer } from 'mobx-react';
import './Cards.css';
import appStore from '../../store/Store.jsx';

const Cards = ({ data }) => {
  const { selectedItems, setSelectedItems } = appStore;
  const handleSelection = (itemId) => {
    const selectedItem = appStore.filteredData.find((item) => item.id === itemId);

    if (selectedItem) {
      appStore.addToCart(selectedItem);
    }

    appStore.setSelectedItems([...appStore.selectedItems, itemId]);
  };

  return (
    <div className="container">
      <div className="col" key={data.id}>
        <div className={`card ${selectedItems?.includes(data.id) ? 'selected' : ''}`}>
          <img src={data.image} className="card-img-top" alt={`Card ${data.id}`} />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-price">
              Price: ${data.price}
              <span
                className={`plus-sign ${selectedItems?.includes(data.id) ? 'selected' : ''}`}
                onClick={() => handleSelection(data.id)}
              >
                {selectedItems?.includes(data.id) ? '-' : '+'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Cards);
