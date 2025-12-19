import React from 'react';


function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <section className="about-text-section">
          <h1>About Our Store</h1>
          <p className="lead-text">
            Welcome to <strong>MyStore</strong>! We are dedicated to bringing you the finest quality electronics and the latest gadgets.
          </p>
          <p>
            Our mission is to provide premium products at affordable prices while ensuring your shopping experience is seamless. 
            By integrating <strong>Stripe</strong>, we guarantee that your payments are 100% secure and encrypted.
          </p>
        </section>

        <section className="social-media-section"><br></br>
          <h3>Connect With Us</h3>
          <p>Follow us on our social platforms for the latest updates and deals:</p>
         <div className="social-links-text">
  <a href="#" className="text-link">INSTAGRAM  </a>
  <span className="separator">|    </span>
  <a href="#" className="text-link">   FACEBOOK    </a>
  <span className="separator">|       </span>
  <a href="#" className="text-link">LINKEDIN  </a>
</div>
        </section>
      </div>
    </div>
  );
}

export default About;