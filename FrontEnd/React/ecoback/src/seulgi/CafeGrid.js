import products from './jsonFile/cafe.json';
import './productCategories.css'
//상품 카테고리 누르면 상세 페이지로 이동
const handleProductClick=()=>{
  window.location.href='url';

}

function Cafe({ product }) {
  const containerStyle = {
    width: '10vw', 
    display:'flex',
    margin:'0vw 0vw 0vw 10vw',
    flexDirection:'column',
    alignItems:'center',

};
  return (
    <div style={containerStyle} onClick={handleProductClick}>
      <div className="product_categories">
      <img src={require(`../image/categories/cafe/${product.image}`)} alt={product.name}
      style={{ width: '18vw'}} />
      </div>
      <div id="productName" style={{fontFamily:"NotoSansKR", fontSize:"3vw", fontWeight:"bold", width:"25vw"}}>{product.name}</div>
    </div>
  );
}


function CafeGrid() {
  return (
    <div className="product-grid">
    
      {products.map(product => (
        
          <Cafe key={product.id} product={product} />

      ))}
      <div class="pointView" style={{textAlign:'center',fontSize:'3vw', margin:'10vh 0'}}>
        포인트가 2024년 3월 1일에 소멸될 예정이에요.
        </div>
    
    </div>
  );
}

export default CafeGrid;
