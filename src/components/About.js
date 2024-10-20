import React from 'react';

const About = () => {
  return (
    <div className="section about">
      <div className="card">
        <h1>About Me</h1>
        <p>I am a developer with experience in modern web technologies like React, JavaScript, and CSS.</p>

        <hr className="divider" /> {/* Line above the skills */}
        
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>HTML</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>

        <hr className="divider" /> {/* Line below the skills */}

        <p>
          I have a strong passion for coding and always strive to learn new technologies.
          My goal is to build responsive and user-friendly applications that solve real-world problems.
          I'm excited to collaborate on innovative projects and contribute to a great team.
        </p>
      </div>
    </div>
  );
};

export default About;
