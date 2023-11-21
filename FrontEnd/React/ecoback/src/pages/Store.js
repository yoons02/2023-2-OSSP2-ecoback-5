import '../css/Store.css';
import Store_box from "../components/store_box.js";

const Store = () => {
    return(
      <div>
        <Store_box url='/productCategories.json' title="포인트 상점"/>
      </div>
    );
  };
  
  export default Store;