// import React, { useState } from 'react';
// import ClothesData from '../../data';
// import Cards from '../cards/Cards';

// const CardContainer = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const clothesData = ClothesData();

//   const filteredData = selectedCategory
//     ? clothesData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase())
//     : clothesData;

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <h2>Clothes Container</h2>
      
//       <Cards data={filteredData}/>
//     </div>
//   );
// }

// export default CardContainer;
import React from 'react';
import Cards from '../cards/Cards';  
import { clothesData } from '../../data'; 
import './CardsContainer.css'
const CardContainer = () => {
  return (
    <div>
      <div className="container">
        <div className="row flex-row">
          {clothesData.map((item) => (
            <Cards key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
