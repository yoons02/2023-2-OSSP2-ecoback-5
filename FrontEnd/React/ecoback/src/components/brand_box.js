import '../css/Store.css';
import API from 'api/axios';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from "./TitleBanner.js";

/*Brand 카테고리 data API 형식이 brand_image, brand_image 이런식이라
Brand 아이콘 생성하는 Brand_box 이미지, 카테고리 이름 불러오는 부분만 수정해
복사해두었습니다.*/
const Brand_box = ({category, title}) => {

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr/>
      <BackbuttonBar title={title}/>
      <hr></hr>
    <div className='title_line'>
      {category.map((categoryData, index) => (
        <div key={index}>
          <Link to={'./' + categoryData.name}>
            <div className='box_categories_m'>
              <img style={{ width: '70%' }} src={API.defaults.baseURL+categoryData.brand_image} alt={categoryData.name} />
            </div>
          </Link>
          <div className='normal' style={{ textAlign: 'center' }}>{categoryData.brand_name}</div>
        </div>
      ))}
    </div>
    <div class="normal" style={{textAlign:'center',fontSize:'90%', margin:'10%'}}>포인트가 2024년 3월 1일에 소멸될 예정이에요.</div> 
    
    </div>
  );
};

export default Brand_box;

