import '../css/Store.css';
import Backbutton from '../kitae/backbutton.js';
import Store_box from "../components/store_box.js";
import TitleBanner from "../components/TitleBanner.js";

const Store = () => {
    return(
      <div>
          {/* <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
                <div className="title"><Link to="/home">Eco$Back</Link></div>
                <Sidebar/>
          </div> */}
          <TitleBanner />
      <hr/>
      <div class="top_line">
        <Backbutton/>
        <div class="normal" style={{fontSize: '6vw',margin:'auto 0'}}>포인트 상점</div>
      </div>
      <div>
        <Store_box/>
      </div>


        <div class="normal" style={{textAlign:'center',fontSize:'3vw', margin:'10vh 0'}}>포인트가 2024년 3월 1일에 소멸될 예정이에요.</div>
        
      </div>
    );
  };
  
  export default Store;