import '../seulgi/productCategories.css';
import {Link} from 'react-router-dom';
//상품 카테고리 누르면 상세 페이지로 이동


function Individual({ product }) {
  const containerStyle = {
    width: '10vw', 
    display:'flex',
    margin:'0vw 0vw 0vw 10vw',
    flexDirection:'column',
    alignItems:'center',

};
  return (
    <div style={containerStyle}>
      <Link to="/product1">
      <div className="product_categories">
      <img src={require(`../image/categories/${product.image}`)} alt={product.name}
      style={{ width: '18vw'}} />
      </div>
      </Link>
      <div id="productName" style={{fontFamily:"NotoSansKR", fontSize:"3vw", fontWeight:"bold", width:"25vw"}}>{product.name}</div>
    </div>
  );
}


function IndividualGrid({products}) {
  return (
    <div className="product-grid">
    
      {products.map(product => (
        
          <Individual key={product.id} product={product} />

      ))}
      <div class="pointView" style={{textAlign:'center',fontSize:'3vw', margin:'10vh 0'}}>
        포인트가 2024년 3월 1일에 소멸될 예정이에요.
        </div>
    
    </div>
  );
}

export default IndividualGrid;
