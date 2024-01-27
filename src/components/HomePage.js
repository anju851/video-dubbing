import React, { useState, useEffect, useRef } from 'react';
import demoVideo from '../videos/Detroit_ Become_Human_PS4.mp4';
import TryDubbing from './Dubbing-Button';

const HomePage = ()=>{
    const [icons,setIcons]=useState([
        { id: 1, timestamp: { start: 0, end: 10 }, enabled: true, source: 'images/flags/Flag_of_America.png', language: 'English' },
        { id: 2, timestamp: { start: 11, end: 24 }, enabled: false, source: 'images/flags/Flag_of_China.png', language: 'Chinese' },
        { id: 3, timestamp: { start: 24, end: 45 }, enabled: true, source: 'images/flags/Flag_of_India.webp', language: 'Hindi' },
        { id: 4, timestamp: { start: 45, end: 64 }, enabled: false, source: 'images/flags/Flag_of_Portugal.webp', language: 'Portugese' },
        // { id: 5, timestamp: { start: 0, end: 10 }, enabled: true, source: 'images/flags/Flag_of_France.png', language: 'French' },
        // { id: 6, timestamp: { start: 15, end: 25 }, enabled: false, source: 'images/flags/Flag_of_Spain.png', language: 'Spanish' }
    ]);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);

  const handleIconClick = (id) => {
     // Find the clicked icon based on id
    const clickedIcon = icons.find((icon) => icon.id === id);

    if (clickedIcon) {
        // Seek the video to the start timestamp of the clicked icon
        videoRef.current.currentTime = clickedIcon.timestamp.start;
        // Play the video
        videoRef.current.play();
  }
  };

  const handleTimeUpdate = () => {
    const currentVideoTime = videoRef.current.currentTime;

  // Check and update the enabled state of each icon based on the current time
  const updatedIcons = icons.map((icon) => {
    const isEnabled = currentVideoTime >= icon.timestamp.start && currentVideoTime <= icon.timestamp.end;
    return {
      ...icon,
      enabled: isEnabled,
    };
  });

  // Update the icons state with the new enabled states
  //this will trigger a re-render with the updated enabled states
  setIcons([...updatedIcons]);
  };

  useEffect(() => {
    // Attach the timeupdate event listener to the video element
    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentTime]);

  //useful when using only the images path in src doesn't work
  // <img src={process.env.PUBLIC_URL + '/images/Flag_of_India.webp'} alt="indian flag" />

  return(
    <div>
        <div style={{
            border: '2px solid grey',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflow: 'hidden', //Ensure overflow doesn't effect shadow
            position: 'absolute',
            top: '130px',
            marginLeft: '680px',
            height:'480px'
        }}>

          {/* Your video component goes here */}
          <div style={{ 
              width: '100%',
              height: '90%' }}>
          
              <video
              ref={videoRef}
              controls
              width="100%"
              onTimeUpdate={handleTimeUpdate} // Handle time updates directly
              >
                  <source src={demoVideo} type="video/mp4" />
                  {/* you can add additional source tags for different video formats if needed */}
              </video>
          </div>

          {/* Icons at the bottom */}
          <div style={{ 
                  position: 'absolute',
                  bottom: 0,
                  display: 'flex', 
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '16px',
                  backgroundColor: 'white' 
                  }}>
            {/* Render icons based on their enabled state */}
            {icons.map((icon) => (
              <div
                key={icon.id}
                style={{
                  flex: '1', // Equal width distribution
                  textAlign: 'center', // Optional: Center content
                  borderRadius: '50%', // Make the container round
                  overflow: 'hidden', // Ensure content within the round container is visible
                }}>
                {/* Your icon component goes here */}
                <img
                  src={process.env.PUBLIC_URL + icon.source} // Update this with the actual image path
                  alt={icon.language}
                  style={{
                    cursor: icon.enabled ? 'pointer' : 'not-allowed',
                    opacity: icon.enabled ? 1 : 0.5,
                    width: '50px', // Adjust width as needed
                    height: '50px', // Adjust height as needed
                    borderRadius: '50%', // Make the image round
                  }}
                  onClick={() => handleIconClick(icon.id)}
                />
              </div>
            ))}
          </div>
      </div>
      <TryDubbing />
    </div>
  );
}

export default HomePage;