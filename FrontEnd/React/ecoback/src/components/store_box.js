import React from 'react';
import '../css/Store.css';
import category from '../minju/productCategories.json';
import {Link} from "react-router-dom";

const Store_box = () => {
  return (
    <div className='title_line'>
      {category.map((categoryData, index) => (
        <div key={index}>
          <Link to={"./"+categoryData.name}>
          <div className="box_categories_m">
            <img style={{width: '18vw'}} src={require('../image/'+categoryData.image)} alt={categoryData.name} />
          </div>
          <div className='normal' style={{textAlign:'center'}}>{categoryData.name}</div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Store_box;
