import React from 'react';
import Webcam from 'react-webcam';

const AllCameras = () => {
  const [devices, setDevices] = React.useState([]);

  // Corrected useCallback usage
  const handleDevices = React.useCallback(
    (mediaDevices) => {
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"));
    },
    [setDevices] // Corrected dependency array
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]); // Removed the unnecessary dependency

  return (
    <>
      {devices.map((device, key) => (
        <div key={key}>
          <Webcam 
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          {device.label || `Device ${key + 1}`}
        </div>
      ))}
    </>
  );
};

export default AllCameras;
