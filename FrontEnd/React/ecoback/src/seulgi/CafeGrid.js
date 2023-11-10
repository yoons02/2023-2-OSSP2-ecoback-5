import products from './jsonFile/cafe.json';
import './productCategories.css'
//상품 카테고리 누르면 상세 페이지로 이동
const handleProductClick=()=>{
  window.location.href='url';

}

function Cafe({ product }) {
  const containerStyle = {
    width: '20vw', 
    margin:'5vw',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',

};
  return (
    <div style={containerStyle} onClick={handleProductClick}>
      <div className="product_categories">
      <img src={require(`../image/categories/cafe/${product.image}`)} alt={product.name}
      style={{ width: '18vw'}} />
      </div>
      <p style={{fontFamily:"NotoSansKR"}}>{product.name}</p>
    </div>
  );
}


function CafeGrid() {
  return (
    <div className="product-grid">
    
      {products.map(product => (
        
          <Cafe key={product.id} product={product} />

      ))}
    
    </div>
  );
}

export default CafeGrid;
