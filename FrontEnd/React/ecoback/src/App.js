import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home.js';
import Store from '../src/pages/Store.js';
import ReceiptFilming from './seulgi/receiptFilming.js';
import MyPage from './pages/mypage.js';
import Event from './kitae/event.js';
import Login from './pages/Login.js';
import Start from './pages/Start.js';
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
        <Route path="/텀블러" element={<ProductsCategory />} />
        <Route path="/뷰티/패션/건강" element={<BeautyHealthCategory />} />
        <Route path="/카페" element={<CafeCategory />} />
        <Route path="/편의점" element={<ConvenienceStoreCategory />} />
        <Route path="/치킨/피자" element={<ChickenPizzaCategory />} />
        <Route path="/아이스크림/빙수" element={<IcecreamCategory />} />
        <Route path="/베이커리/도넛" element={<BakeryCategory/>} />
        <Route path="/상품권/마트" element={<GiftcardCategory />} />
        <Route path="/영화/OTT/체험" element={<MovieCategory />} />
        <Route path="/product1" element={<Product />} />
        <Route path="/products" element={<ProductsCategory />} />
        <Route path="/individual" element={<IndividualGrid />} />

    </Routes> 
    
  );
};


export default App;