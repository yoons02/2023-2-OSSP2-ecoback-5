
import products from './jsonFile/beautyHealth.json';
import './productCategories.css'
//상품 카테고리 누르면 상세 페이지로 이동
const handleProductClick=()=>{
  window.location.href='url';
}

function BeautyHealth({ product }) {
  const containerStyle = {
    maxWidth:'185px',
    padding: '5px',
    margin:'10px',
    display:'inline-flex',
    boxSizing: 'border-box',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',


};
  
  return (
    <div style={containerStyle} className="beautyHealth" onClick={handleProductClick}>
      <div className="product_categories">
      <img src={require(`../image/categories/cafe/${product.image}`)} alt={product.name}
      style={{ width: '100px', height: '90px' }} />
      </div>
      <p style={{fontFamily:"NotoSansKR"}}>{product.name}</p>
    </div>
  );
}


function cafeGrid() {
  return (
    <div className="product-grid">
    
      {products.map(product => (
        
          <BeautyHealth key={product.id} product={product} />

      ))}
    
    </div>
  );
}

export default cafeGrid;
