import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const TryDubbing=()=>{
    const handleTryDubbingClick =()=>{
        console.log('try button clicked');
    }

    return(
        <div style={{position:'absolute', top:'700px', marginLeft:'150px'}}>
            <button style={{
                backgroundColor:'#3457D5',
                color:'white',
                fontSize:'20px',
                height:'60px',
                width:'200px',
                borderRadius:'10px'
            }} 
            onClick={handleTryDubbingClick}>
            <Link to="/video-upload">Try Dubbing
                <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:'10px'}} />
            </Link>
            </button>
        </div>
    );
}

export default TryDubbing;