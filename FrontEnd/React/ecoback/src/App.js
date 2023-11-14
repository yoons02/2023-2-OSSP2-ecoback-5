import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home.js';
import Store from '../src/pages/Store.js';
import ReceiptFilming from './seulgi/receiptFilming.js';
import MyPage from './seulgi/mypage.js';
import Event from './kitae/event.js';
import Login from './pages/Login.js';
import Start from './pages/Start.js';
import BeautyHealthCategory from './seulgi/BeautyHealthCategory.js';
import CafeCategory from './seulgi/CafeCategory.js';
import ConvenienceStoreCategory from './seulgi/convenienceStoreCategory.js';
import ChickenPizzaCategory from './seulgi/ChickenPizzaCategory.js';
import Product from './pages/Product.js';
import EditProfile from './pages/EditProfile.js';
import Register from './pages/Register.js';
const App = () => {
  return(
    
    
    <Routes>
        <Route path="/"  element={<Start />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register />} />

        <Route path="/" element={<Home />} /> 
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/receiptfilming" element={<ReceiptFilming />} />
        <Route path="/mypage" element={<MyPage />}/>
        <Route path="/event" element={<Event />}/>
        <Route path='/editprofilepage' element={<EditProfile />} />

        {/*메인 상점 페이지와 카테고리별 상점 페이지 연결*/}
        <Route path="/store/뷰티/패션.건강" element={<BeautyHealthCategory />} />
        <Route path="/store/카페" element={<CafeCategory />} />
        <Route path="/store/편의점" element={<ConvenienceStoreCategory />} />
        <Route path="/store/치킨/피자" element={<ChickenPizzaCategory />} />
    </Routes> 
    
  );
};


export default App;