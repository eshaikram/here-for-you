
import './feature.css'; 

const Features = () => {
  const features = [
    "My Story",
    "Photo Gallery",
    "Slideshow",
    "Videos",
    "Life Timeline",
    "Favorites",
    "Family Tree",
    "Memory Wall",
    "Customizable Color Scheme",
  ];

  return (
    <div className="more-features-section">
      <div className="lg-container">
        <div className="center-heading">
          <h2 className='heading'>More Of Our Features</h2>
          <div className="under-line"></div>
        </div>
        <div className="features-card">
          {features.map((feature, index) => (
            <div className="list-item" key={index}>
              <i className="fa-solid fa-circle-check"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
