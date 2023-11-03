import React, {useState, useEffect, useRef} from 'react';
import Webcam from 'react-webcam';
import './receiptFilming.css';
const videoConstraints={
    width: { ideal: window.innerWidth }, 
    facingMode:"environment",
};

const Camera=()=>{
    const webcamRef=useRef(null)

    const [url,setUrl]=useState(null)

    const capturePhoto=React.useCallback(async()=>{
        const imageSrc=webcamRef.current.getScreenshot();
        setUrl(imageSrc)
    },[webcamRef])

    const onUserMedia=(e)=>{
        console.log(e)
    }
    return (
        <>
            <Webcam

                ref={webcamRef}
                audio={false}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
                mirrored={true}
            ></Webcam>
            <img></img>
            <button id="capture"onClick={capturePhoto}>Capture</button>
            <button id="refresh" onClick={()=>{setUrl(null)}}>Refresh</button>
            {url && (
                <div>
                    <img src={url} alt='ScreenShot'/>
                </div>
            )}
        </>
    )

}

export default Camera;