import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home.js';
import Store from '../src/pages/Store.js';
import Store_Temp from '../src/pages/Product_temp.js';
import ReceiptFilming from './seulgi/receiptFilming.js';
import MyPage from './pages/mypage.js';

import EventCopy from './kitae/EventCopy.js';
import EventDetail from 'kitae/Eventdetail.js';

import Login from './pages/Login.js';
import Start from './pages/index.js';
import BeautyHealthCategory from './pages/BeautyHealthCategory.js';
import CafeCategory from './pages/CafeCategory.js';
import ConvenienceStoreCategory from './pages/convenienceStoreCategory.js';
import ChickenPizzaCategory from './pages/ChickenPizzaCategory.js';
import Product from './pages/Product.js';
import EditProfile from './pages/EditProfile.js';
import Register from './pages/Register.js';
import ProductsCategory from './pages/ProductsCategory.js';
import IndividualGrid from 'components/individualGrid.js';
import IcecreamCategory from './pages/IcecreamCategory.js';
import BakeryCategory from 'pages/BakeryCategory.js';
import GiftcardCategory from 'pages/GiftcardCategory.js';
import MovieCategory from 'pages/MovieCategory.js';
import Product_temp from './pages/Product_temp.js'
import Manager from './pages/manager/Manager.js'
import Category_add from './pages/manager/Category_add.js'

const App = () => {
  return(
    /*브랜드별 개별 상품페이지 API 보니까 현재 id 2, 5번에 대한 data만
    들어있길래 일단 id:2번 data로 개별 상품 페이지 임시적으로 연결해놨습니다.*/
    
    <Routes>
        <Route path="/"  element={<Start />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register />} />

        <Route path="/" element={<Home />} /> 
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Store_temp" element={<Store_Temp />} />
        <Route path="/receiptfilming" element={<ReceiptFilming />} />
        <Route path="/mypage" element={<MyPage />}/>
        <Route path="/event" element={<EventCopy />}/>
        <Route path='/editprofilepage' element={<EditProfile />} />
        <Route path="/Store/텀블러" element={<ProductsCategory />} />
        <Route path="/Store/뷰티/패션/건강" element={<BeautyHealthCategory />} />
        <Route path="/Store/카페" element={<CafeCategory />} />
        <Route path="/Store/편의점" element={<ConvenienceStoreCategory />} />
        <Route path="/Store/치킨/피자" element={<ChickenPizzaCategory />} />
        <Route path="/Store/아이스크림/빙수" element={<IcecreamCategory />} />
        <Route path="/Store/베이커리/도넛" element={<BakeryCategory/>} />
        <Route path="/Store/상품권/마트" element={<GiftcardCategory />} />
        <Route path="/Store/영화/OTT/체험" element={<MovieCategory />} />
        <Route path="/product1" element={<Product />} />
        <Route path="/products" element={<ProductsCategory />} />
        <Route path="/individual" element={<IndividualGrid />} />
        <Route path="/product_temp" element={<Product_temp />} />

        <Route path="/manager" element={<Manager />} />
        <Route path="/manager/category_add" element={<Category_add />} />


    
        <Route exact path="/event" element={<EventCopy />} />
        <Route path="/event/:id" element={<EventDetail />} />


    </Routes> 
    
  );
};


export default App;