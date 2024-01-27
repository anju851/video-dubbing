import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoUploadPage from './components/VideoDubbingPage';


function App() {
  return (
    <Router>
      <div style={{position: 'relative'}}>
        {/*Page Header */}
        <div style={{
          position:'relative',
          background: '#3457D5',
          height:'80px'
        }}>
          <span style={{ fontsize:'40px',position:'absolute',left:'70px',top:'30%'}}>SONY</span>
        </div>
        {/* Video Placeholder */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/video-upload" element={<VideoUploadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
