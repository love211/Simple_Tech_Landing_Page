import React from 'react';
import './ProductSection.css';
import featureimage1 from '../assets/featureimage1.jpg';
import featureimage2 from '../assets/featureimage2.jpg';

// Sample feature data array (can be replaced with actual data or fetched dynamically)
const features = [
  {
    id: 1,
    image: featureimage1,
    title: 'Feature 1',
    description: 'Brief description of feature 1. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 2,
    image: featureimage2,
    title: 'Feature 2',
    description: 'Brief description of feature 2. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 3,
    image: featureimage1,
    title: 'Feature 3',
    description: 'Brief description of feature 3. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 4,
    image: featureimage2,
    title: 'Feature 4',
    description: 'Brief description of feature 4. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  
  {
    id: 5,
    image: featureimage1,
    title: 'Feature 5',
    description: 'Brief description of feature 5. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 6,
    image: featureimage2,
    title: 'Feature 6',
    description: 'Brief description of feature 6. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 7,
    image: featureimage1,
    title: 'Feature 7',
    description: 'Brief description of feature 7. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 8,
    image: featureimage2,
    title: 'Feature 8',
    description: 'Brief description of feature 8. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 9,
    image: featureimage1,
    title: 'Feature 9',
    description: 'Brief description of feature 9. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 10,
    image: featureimage2,
    title: 'Feature 10',
    description: 'Brief description of feature 10. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 11,
    image: featureimage1,
    title: 'Feature 11',
    description: 'Brief description of feature 11. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 12,
    image: featureimage2,
    title: 'Feature 12',
    description: 'Brief description of feature 12. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 13,
    image: featureimage1,
    title: 'Feature 13',
    description: 'Brief description of feature 13. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 14,
    image: featureimage2,
    title: 'Feature 14',
    description: 'Brief description of feature 14. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 15,
    image: featureimage1,
    title: 'Feature 15',
    description: 'Brief description of feature 15. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 16,
    image: featureimage2,
    title: 'Feature 16',
    description: 'Brief description of feature 16. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 17,
    image: featureimage1,
    title: 'Feature 17',
    description: 'Brief description of feature 17. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 18,
    image: featureimage2,
    title: 'Feature 18',
    description: 'Brief description of feature 18. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 19,
    image: featureimage1,
    title: 'Feature 19',
    description: 'Brief description of feature 19. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  {
    id: 20,
    image: featureimage2,
    title: 'Feature 20',
    description: 'Brief description of feature 20. This is a longer description to test the truncation functionality. It should be shortened to 20 words or less.',
  },
  // Add more features as needed
];

function ProductSection() {
  const rows = [];
  const cardsPerRow = 4;

  // Split features into rows of cards
  for (let i = 0; i < features.length; i += cardsPerRow) {
    const rowFeatures = features.slice(i, i + cardsPerRow);
    rows.push(rowFeatures);
  }

  return (
    <section id="product" className="product-section">
      <h2 style={{fontFamily:"urbanist"}}>Our Product</h2>
      <p style={{fontFamily:"urbanist"}}>This is a brief description of the product.</p>
      <div className="features-container">
        {rows.map((row, index) => (
          <div key={index} className="row">
            {row.map((feature) => (
              <div key={feature.id} className="feature">
                <img src={feature.image} alt={feature.title} className="feature-image" />
                <div className="feature-details">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
            {row.length < cardsPerRow && (
              <div className="empty-card"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;