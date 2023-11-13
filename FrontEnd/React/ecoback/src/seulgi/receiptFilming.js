import './receiptFilming.css'
import Webcam from "react-webcam";
import Camera from './Camera'
import TitleBanner from "../components/TitleBanner.js"
import Backbutton from '../kitae/backbutton';
const WebcamComponent = () => <Webcam />;
const ReceiptFilming=()=>{
    return (
    <div class="filmingPage" style={{backgroundColor:"#F9F9F9"}}>
        <TitleBanner />
            <hr />
            {/* <div class="top_line">
                <Backbutton />
                <div class="normal" style={{fontSize: '30px',margin:'auto 0'}}>영수증 촬영</div>
            </div> */}
            <div style={{ display: 'flex' }}>
                <Backbutton/>
                <p id="film_title">영수증 촬영</p>    
            </div> 
            <div id="camera">
                <Camera />
            </div>
    </div>

    );};

export default ReceiptFilming;