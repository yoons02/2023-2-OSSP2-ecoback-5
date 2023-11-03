import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home.js';
import Store from '../src/pages/Store.js';
import ReceiptFilming from './seulgi/receiptFilming.js';
import MyPage from './seulgi/mypage.js';
import AllCameras from './seulgi/AllCameras.js'
import Camera from './seulgi/Camera.js'
import Login from './pages/Login.js';

const App = () => {
  return(
    <ReceiptFilming />
    /*
    <Routes>

      <Route path="/" element={<ReceiptFilming />} />
        { <Route path="/" element={<Home />} /> }

        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home />} />

        <Route path="/Store" element={<Store />} />
    </Routes> 
    */
  );
};


export default App;