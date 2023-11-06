import './receiptFilming.css'
import Webcam from "react-webcam";
import Camera from './Camera'
import { Link } from 'react-router-dom';
import Sidebar from '../kitae/sidebar';
import Backbutton from '../kitae/backbutton';
const WebcamComponent = () => <Webcam />;
const ReceiptFilming=()=>{
    return (
    <div style={{backgroundColor:"#F9F9F9"}}>
    {/* <div className="normal" style={{ padding: '15px' }}>
        <div className="menuContainer">
        <span className="title">Eco$Back</span>
        <span id="menubar_array"> 
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </span>
        </div>
    </div> */}
    <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
            <div className="title"><Link to="/home">Eco$Back</Link></div>
            <Sidebar/>
        </div>
    <hr />
    <div class="top_line">
        {/* <img src={require('../image/arrow-right.png')} style={{ width: '30px', height: '30px' }} /> */}
        <Backbutton />
        <div class="normal" style={{fontSize: '30px',margin:'auto 0'}}>영수증 촬영</div>
    </div>
    <div id="camera">
        <Camera />
    </div>
    <div className="captureBtn">

    </div>
    </div>

    );};

export default ReceiptFilming;