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
import ProductsCategory from './seulgi/ProductsCategory.js';
import IndividualGrid from 'components/individualGrid.js';
import IcecreamCategory from './seulgi/IcecreamCategory.js';

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

        <Route path="/뷰티/패션/건강" element={<BeautyHealthCategory />} />
        <Route path="/카페" element={<CafeCategory />} />
        <Route path="/편의점" element={<ConvenienceStoreCategory />} />
        <Route path="/치킨/피자" element={<ChickenPizzaCategory />} />
        <Route path="/아이스크림/빙수" element={<IcecreamCategory />} />
        <Route path="/product1" element={<Product />} />
        <Route path="/products" element={<ProductsCategory />} />
        <Route path="/individual" element={<IndividualGrid />} />

    </Routes> 
    
  );
};


export default App;