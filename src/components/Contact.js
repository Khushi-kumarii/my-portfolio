import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import socialMediaData from './data/socialMediaData';

const Contact = () => {
  return (
    <div className="section contact">
      <h1>Contact Me</h1>
      <p>Email: khushik7698@gmail.com</p>
      <p>Phone: +91 9266457833</p>

      <div className="social-media-icons">
        {socialMediaData.map((media) => (
          media.link && (
            <a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer" aria-label={media.name}>
            <FontAwesomeIcon icon={media.icon} size="2x" style={{ margin: '0 15px' }} />
          </a>
          )
        ))}
      </div>
    </div>
  );
};

export default Contact;
