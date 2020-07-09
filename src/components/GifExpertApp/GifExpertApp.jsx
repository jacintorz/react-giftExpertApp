import React, { useState } from 'react';
import AddCategory from '../AddCategory/AddCategory';
import GifGrid from '../GifGrid/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'GI Joe']);
  //   setCategories((cats) => [...cats, 'GI Joe']);
  // };

  return (
    <React.Fragment>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </React.Fragment>
  );
};

export default GifExpertApp;
