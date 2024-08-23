import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="heading">Welcome to VogueAura</h1>
      <p className="description">
        We're passionate about bringing you the latest fashion trends and
        must-have products at unbeatable prices. As a dropshipping website,
        we're committed to providing a seamless shopping experience, fast
        shipping, and exceptional customer service.
      </p>
      <h2 className="subheading">Our Mission</h2>
      <p className="description">
        To provide a hassle-free shopping experience, fast shipping, and
        exceptional customer service. We strive to build long-term relationships
        with our customers and continually improve our product offerings to meet
        their evolving needs.
      </p>
      <h2 className="subheading">Why Choose VogueAura?</h2>
      <ul className="benefits">
        <li>Fast Shipping</li>
        <li>Exceptional Customer Service</li>
        <li>Unbeatable Prices</li>
      </ul>
      <h2 className="subheading">Get in Touch</h2>
      <p className="description">
        Contact us with any questions or concerns. We're always here to help.
      </p>
      <p className="footer">Thank you for shopping with VogueAura!</p>
      <p className="footer">Best regards, The VogueAura Team</p>
    </div>
  );
};

export default About;
