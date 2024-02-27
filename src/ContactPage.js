import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './global.css';
import './ContactPage.css';

function ContactPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://feeds.behold.so/fEHm8azBo72lqkcL6PL2');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-container">
      <h1 className='title-text'>Contact</h1>
      <div className='text'>Questions? Feel free to reach out to us on Instagram or Facebook:</div>
      <div className='social-media'>
        <a href="https://www.instagram.com/gam.for.mrgt/" target="_blank" rel="noopener noreferrer">
          <img src='./instagramcolor.png' alt='Instagram' className="social-media-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556509419145" target="_blank" rel="noopener noreferrer">
          <img src='./facebook.png' alt='Facebook logo' className="social-media-icon" />
        </a>
      </div>
      <div className ='text'>Learn more about BCM at Georgia Tech here:</div>
      <div className='social-media'>
        <a href="https://www.gtbcm.com" target="_blank" rel="noopener noreferrer">
          <img src='./gtbcm.png' alt='GTBCM' className="social-media-icon" />
        </a>
      </div>

      {userData && (
        <div>
          <div id='header'>Check out our Instagram:</div>
          <div className="post-container">
            {userData.posts && userData.posts.map(post => (
              <div className="post-item" key={post.id}>
                <img src={post.mediaUrl} alt="Post" />
                <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="instagram-link">
                  <img src="./instagram.png" alt="Instagram Logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
