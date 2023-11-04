import React, { useState } from 'react';
import './Nutritionshop.css'; // Make sure to create a corresponding CSS file

const NutritionShop = () => {
  // This state will eventually be populated with data from your database
  const [topSellingItems, setTopSellingItems] = useState([
    // Placeholder items
    { id: 1, name: 'Product A', imageUrl: '/path-to-image-a.jpg' },
    { id: 2, name: 'Product B', imageUrl: '/path-to-image-b.jpg' },
    // Add more placeholder items...
  ]);

  // Form state (placeholders for now)
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    // Include other form fields as necessary
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle submission to the database
    console.log(formData);
  };

  return (
    <div className="nutrition-shop">
      <div className="top-selling-container">
        <h2>Top Selling Items</h2>
        <div className="top-selling-scroll">
          {topSellingItems.map((item) => (
            <div key={item.id} className="top-selling-item">
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="product-submission-form">
        <h2>Sell Your Products</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          {/* Add additional form fields here */}
          <button type="submit">Submit Product</button>
        </form>
      </div>
    </div>
  );
};

export default NutritionShop;
