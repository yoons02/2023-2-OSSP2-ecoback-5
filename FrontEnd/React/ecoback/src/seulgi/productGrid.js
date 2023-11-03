import './ProductGrid.css';
import products from './productCategories.json';



//상품 카테고리 누르면 상세 페이지로 이동
const handleProductClick=()=>{
  window.location.href='url';
}

function Product({ product }) {
  
  return (
    <div className="product" onClick={handleProductClick}>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
