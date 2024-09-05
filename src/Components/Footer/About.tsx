import "./About.css";
import mypic from "../../images/mypic.jpeg";
const About = () => {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>Welcome to VogueAura</h1>
        <p>
          We're passionate about bringing you the latest fashion trends and
          must-have products at unbeatable prices. As a dropshipping website,
          we're committed to providing a seamless shopping experience, fast
          shipping, and exceptional customer service.
        </p>
      </section>

      <section className="mission-vision-section">
        <div className="card-about">
          <h2>Our Mission</h2>
          <p>
            To provide a hassle-free shopping experience, fast shipping, and
            exceptional customer service. We strive to build long-term
            relationships with our customers and continually improve our product
            offerings to meet their evolving needs.
          </p>
        </div>
      </section>
      <section className="team-section">
        <h2>Meet Our Founder</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo">
              <img src={mypic} alt="" />
            </div>
            <h4>Owais Khiljee</h4>
            <p>CEO & Founder</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Why Choose VogueAura?</h2>
        <div className="values-cards">
          <div className="value-card">
            <h4>Fast Shipping</h4>
            <p>
              Experience swift deliveries with our reliable shipping partners.
            </p>
          </div>
          <div className="value-card">
            <h4>Exceptional Customer Service</h4>
            <p>
              We're here to assist you at every step, ensuring a smooth shopping
              journey.
            </p>
          </div>
          <div className="value-card">
            <h4>Unbeatable Prices</h4>
            <p>
              Get the best deals on the latest fashion trends, without breaking
              the bank.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Get in Touch</h2>
        <p>
          Contact us with any questions or concerns. We're always here to help.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>

      <section className="footer-section">
        <h4>Thank you for shopping with VogueAura!</h4>
        <h4>Best regards, The VogueAura Team</h4>
      </section>
    </div>
  );
};

export default About;
