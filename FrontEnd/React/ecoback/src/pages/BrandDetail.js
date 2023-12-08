import { useLocation } from 'react-router-dom';
import Brand_box from "../components/brand_box.js";

import '../css/Eventdetail.css';

const BrandDetail = () => {
  const location = useLocation();
  const categoryName = new URLSearchParams(location.search).get('categoryName');
  const Id = location.pathname.split('/').pop(); // URL에서 이벤트 ID가 있다고 가정합니다.

  return (
    <div className="full_container">
      <Brand_box url={Id} title={categoryName || "브랜드"} />
    </div>
  );
};

export default BrandDetail;

