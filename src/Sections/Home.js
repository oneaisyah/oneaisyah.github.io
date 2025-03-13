import React from 'react';

function Home() {
  return (
    <div>
      <h1>Hey, I'm Aisyah!</h1>
      <h2>Cybersecurity Enthusiast | Developer</h2>
      <h3>Explore my portfolio by clicking the keys!</h3>

      <div className="hidden-message">
        <h4>
          <span>
            Somewhere in this website is a hidden message. Can you find it?
          </span>
          <br />
          <span style={{ display: 'none' }}>You've found the hidden message!</span>
        </h4>
      </div>
    </div>
  );
}

export default Home;