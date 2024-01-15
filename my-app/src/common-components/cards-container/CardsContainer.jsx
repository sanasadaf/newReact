import React from "react";
import { observer } from "mobx-react";
import "./CardsContainer.css";
import appStore from "../../store/Store.jsx";
import Cards from "../cards/Cards";

const CardsContainer = () => {
  const { filteredData } = appStore;
  return (
    <div>
      <div className="container">
        <div className="row flex-row">
          {filteredData.map((item) => (
            <Cards key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(CardsContainer);