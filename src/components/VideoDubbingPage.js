// VideoUploadPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoUploadPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedVideo(file);
  };

  return (
    <div>
      <h2>Video Upload Page</h2>

      {/* Language Dropdown */}
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="english">Indian</option>
        <option value="spanish">Portugese</option>
        <option value="english">Chinese</option>
        <option value="spanish">French</option>
      </select>

      {/* Video Upload Section */}
      <div style={{ marginTop: '20px' }}>
        <h3>Upload Video</h3>
        <input type="file" accept="video/*" onChange={handleFileUpload} />
        {uploadedVideo && <p>Video selected: {uploadedVideo.name}</p>}
      </div>
      <button style={{
        backgroundColor:'#3457D5',
        color:'white',
        fontSize:'20px',
        height:'60px',
        width:'200px',
        borderRadius:'10px'
      }}>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default VideoUploadPage;
