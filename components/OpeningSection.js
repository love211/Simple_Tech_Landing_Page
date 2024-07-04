import React, { useState } from 'react';
import './OpeningSection.css';
import bannerimage from '../assets/bannerimage.jpg'; 

function OpeningSection() {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section id="home" className="opening-section">
      <div className="hero-image" style={{ backgroundImage: `url(${bannerimage})` }}>
        <div className="hero-text">
          <h1>Introducing Our Latest Product</h1>
          <p className="product-description">
            Introducing the Future of Technology with our Latest Innovation. Our groundbreaking product is designed to revolutionize your daily life with its cutting-edge features and unparalleled performance. Experience the next level of convenience, efficiency, and style with our state-of-the-art solution. Discover how our latest product can transform your world and elevate your technological experience to new heights. Stay ahead of the curve and be among the first to embrace the future with Tech.
          </p>
          <button className="learn-more-btn" onClick={handleToggleDescription}>
            {showDescription ? 'Hide Details' : 'Learn More'}
          </button>
        </div>
      </div>
      {showDescription && (
        <div className="additional-description">
          <p>
            This is the additional description that gets toggled when the button is clicked. Here you can provide more detailed information about the product, its features, benefits, and any other relevant details that would help potential customers understand and appreciate the value of the product.
          </p>
        </div>
      )}
    </section>
  );
}

export default OpeningSection;
