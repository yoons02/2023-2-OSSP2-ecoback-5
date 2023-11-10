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
const App = () => {
  return(
    
    
    <Routes>
        <Route path="/"  element={<Start />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Home />} /> 
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/receiptfilming" element={<ReceiptFilming />} />
        <Route path="/mypage" element={<MyPage />}/>
        <Route path="/event" element={<Event />}/>
        <Route path='/editprofilepage' element={<EditProfile />} />

        <Route path="/beautyhealthcategory" element={<BeautyHealthCategory />} />
        <Route path="/cafecategory" element={<CafeCategory />} />
        <Route path="/conveniencestorecategory" element={<ConvenienceStoreCategory />} />
        <Route path="/chickenpizzacategory" element={<ChickenPizzaCategory />} />
    </Routes> 
    
  );
};


export default App;