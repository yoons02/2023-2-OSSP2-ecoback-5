import './receiptFilming.css'
import Webcam from "react-webcam";
import Camera from './Camera'
import { Link } from 'react-router-dom';
import Sidebar from '../kitae/sidebar';
import Backbutton from '../kitae/backbutton';
const WebcamComponent = () => <Webcam />;
const ReceiptFilming=()=>{
    return (
    <div class="filmingPage" style={{backgroundColor:"#F9F9F9"}}>
        <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
            <div className="title">Eco$Back</div>
                <Sidebar />
            </div>
            <hr />
            <div class="top_line">
                <Backbutton />
                <div class="normal" style={{fontSize: '30px',margin:'auto 0'}}>영수증 촬영</div>
            </div>
            <div id="camera">
                <Camera />
            </div>
    </div>

    );};

export default ReceiptFilming;