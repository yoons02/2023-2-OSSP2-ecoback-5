import React from 'react';
import '../css/Store.css';
import category from '../minju/productCategories.json';
import {Link} from "react-router-dom";

const Store_box = () => {
  return (
    <div className='title_line'>
      {category.map((categoryData, index) => (
        <div key={index}>
          {console.log(categoryData.urlpath)}
          {/* <Link to={"/"+categoryData.data}></Link>*/}
          {/* 왜 urlpath 항목이 undefined로 출력되지? image 항목은 로드되는데? */}
         {/* <Link to={`${categoryData.urlpath}`}> */}
         <Link to={"/cafecategory"}>
          <div className="box_categories_m">
            <img style={{width: '18vw'}} src={require('../image/'+categoryData.image)} alt={categoryData.name} />
          </div>
          </Link>
          <div className='normal' style={{textAlign:'center'}}>{categoryData.name}</div>
        
        </div>
      ))}
    </div>
  );
};

export default Store_box;
