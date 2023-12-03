import '../css/Store.css';
import API from 'api/axios';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from "../components/TitleBanner.js";
const Store_box = ({category, title}) => {

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
              <img style={{ width: '70%' }} src={API.defaults.baseURL+categoryData.image} alt={categoryData.name} />
            </div>
          </Link>
          <div className='normal' style={{ textAlign: 'center' }}>{categoryData.name}</div>
        </div>
      ))}
    </div>
    <div class="normal" style={{textAlign:'center',fontSize:'90%', margin:'10%'}}>포인트가 2024년 3월 1일에 소멸될 예정이에요.</div> 
    
    </div>
  );
};

export default Store_box;

