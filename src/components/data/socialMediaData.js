// Import the icons from the Font Awesome library
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for faEnvelope

// Create an array of social media data
const socialMediaData = [
  {
    id: 1,
    name: 'Facebook',
    icon: faFacebook,
    link: 'https://www.facebook.com/yourprofile', // Replace with your actual link
  },
  {
    id: 2,
    name: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/yourprofile', // Replace with your actual link
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/khushi-kumarii', // Replace with your actual link
  },
  {
    id: 4,
    name: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/Khushi-kumarii', // Replace with your actual link
  },
  {
    id: 5,
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/yourprofile', // Replace with your actual link
  },
  {
    id: 6,
    name: 'YouTube',
    icon: faYoutube,
    link: 'https://www.youtube.com/yourchannel', // Replace with your actual link
  },
  {
    id: 7,
    name: 'Email',
    icon: faEnvelope, // Use the correct icon import
    link: 'mailto:khushik7698@gmail.com', // Replace with your actual email link
  },
];

// Export the social media data
export default socialMediaData;
