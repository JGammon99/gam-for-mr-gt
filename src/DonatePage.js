import React from 'react';
import './global.css';
import './DonatePage.css'; // Import additional CSS for styling

function DonatePage() {
  const handleDonate = (amount) => {
    const venmoLink = `https://account.venmo.com/pay?recipients=GTBCM&note=Mr. GT - Jackson Gammon&amount=${amount}`;
    window.open(venmoLink, '_blank');
  };

  const redirectToGoogleForm = () => {
    window.open('https://forms.gle/MQ2VfMAVbcgpzUN78', '_blank');
  };

  return (
    <div className="page-container">
      <h1 className="title-text">T-Shirts</h1>
      <div className='donate-description'>
        To raise money for missions, we are selling T-Shirts! These are exclusive shirts you can only get from this fundraiser! Order them using the link below!
      </div>
      <div className="shirt-images">
        <div>
          <img src="./front.png" alt="Front" className="shirt-image" />
          <p className="image-label">Front</p>
        </div>
        <div>
          <img src="./back.png" alt="Back" className="shirt-image" />
          <p className="image-label">Back</p>
        </div>
      </div>
      <div className="google-form-button">
        <button className="google-form-btn" onClick={redirectToGoogleForm}>Order Here!</button>
      </div>
      <h1 className='title-text'>Donate</h1>
      <div className="donate-description">
        If you'd like to donate directly, you can do so using this link! All donations go to sending college students on mission!
      </div>
      <div className="donation-form">
        <input type="text" className="donation-amount" placeholder="Enter donation amount" />
        <button className="venmo-donate-btn" onClick={() => handleDonate(document.querySelector('.donation-amount').value)}>
          <img src='./venmo.png' alt="Venmo Logo" className="venmo-logo" />
        </button>
      </div>
    </div>
  );
}

export default DonatePage;
