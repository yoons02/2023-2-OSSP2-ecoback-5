import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Store from './pages/Store.js';



const App = () => {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
    </Routes> 
  );
};

export default App;