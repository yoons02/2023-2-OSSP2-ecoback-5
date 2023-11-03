import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home.js';
import Store from '../src/pages/Store.js';
<<<<<<< HEAD
import MyPage from './seulgi/mypage.js';
=======
import Login from './pages/Login.js';
>>>>>>> upstream/main



const App = () => {
  return(
    
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<MyPage />} />
        {/* <Route path="/" element={<Home />} /> */}
=======
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
>>>>>>> upstream/main
        <Route path="/Store" element={<Store />} />
    </Routes> 
  );
};


export default App;