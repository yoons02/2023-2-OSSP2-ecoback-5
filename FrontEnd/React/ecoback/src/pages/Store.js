import '../css/Store.css';
import Backbutton from '../kitae/backbutton.js';
import Store_box from "../components/store_box.js";
import TitleBanner from "../components/TitleBanner.js";
import BackbuttonBar from 'components/BackbuttonBar';


const Store = () => {
    return(
      <div>
          <TitleBanner />
      <hr/>
      <BackbuttonBar title="포인트 상점"/>
      <hr></hr>
      <div>
        <Store_box/>
      </div>


        <div class="normal" style={{textAlign:'center',fontSize:'3vw', margin:'10vh 0'}}>포인트가 2024년 3월 1일에 소멸될 예정이에요.</div>
        
      </div>
    );
  };
  
  export default Store;