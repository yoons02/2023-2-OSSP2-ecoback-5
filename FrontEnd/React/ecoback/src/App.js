import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home.js';

import Store from '../src/pages/Store.js';
import BrandDetail from '../src/pages/BrandDetail.js';
import ProductDetail from './pages/ProductDetail.js'
import SpecificProductDetail from './pages/SpecificProductDetail.js'

import ReceiptFilming from './seulgi/receiptFilming.js';
import MyPage from './pages/mypage.js';

import EventCopy from './kitae/EventCopy.js';
import EventDetail from './kitae/Eventdetail.js';

import Login from './pages/Login.js';
import Start from './pages/index.js';

import EditProfile from './pages/EditProfile.js';
import Register from './pages/Register.js';
import MyProduct from '../src/pages/MyProduct.js';

import Manager from './pages/manager/Manager.js'
import Category_add from './pages/manager/Category_add.js'

const App = () => {
  return(
    /*브랜드별 개별 상품페이지 API 보니까 현재 id 2, 5번에 대한 data만
    들어있길래 일단 id:2번 data로 개별 상품 페이지 임시적으로 연결해놨습니다.*/
    
    <Routes>

      {/* 시작 및 로그인 관련*/}
        <Route path="/"  element={<Start />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register />} />

        <Route path="/" element={<Home />} /> 
        
        {/* Main 화면 관련*/}
        <Route path="/Home" element={<Home />} />
        
       {/* 마이페이지 관련*/}
        <Route path="/receiptfilming" element={<ReceiptFilming />} />
        <Route path="/mypage" element={<MyPage />}/>
        <Route path="/event" element={<EventCopy />}/>
        <Route path='/editprofilepage' element={<EditProfile />} />
        <Route path='/myproduct' element={<MyProduct />} />
       
        {/* 관리자 관련 */}
        <Route path="/manager" element={<Manager />} />
          <Route path="/manager/category_add" element={<Category_add />} />

        {/* Store 관련 */}
        <Route path="/Store" element={<Store />} />
          <Route path="/store/:id" element={<BrandDetail />} />
            <Route path="/store/brand/:id" element={<ProductDetail />} />
              <Route path="/store/product/:id" element={<SpecificProductDetail />} />

        {/* event 관련 */}
        <Route exact path="/event" element={<EventCopy />} />
          <Route path="/event/:id" element={<EventDetail />} />


    </Routes> 
    
  );
};


export default App;