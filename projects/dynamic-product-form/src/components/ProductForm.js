import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: null,
    mainImages: [],
    category: '',
    stock: 0,
    weight: 0,
    prices: [{ countryName: '', countryCode: '', price: '' }]
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, index, field, section) => {
    const { value } = e.target;
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: name === 'mainImages' ? Array.from(files) : files[0] });
  };

  const handleAddField = (field) => {
    setFormData({
      ...formData,
      [field]: [
        ...formData[field],
        field === 'prices'
          ? { countryName: '', countryCode: '', price: '' }
          : { name: '', amount: '', unit: '' }
      ]
    });
  };

  const handleRemoveField = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the current form data into the submitted data array
    setSubmittedData([...submittedData, formData]);

    // Reset the form after submission
    setFormData({
      title: '',
      description: '',
      thumbnail: null,
      mainImages: [],
      category: '',
      stock: 0,
      weight: 0,
      prices: [{ countryName: '', countryCode: '', price: '' }]
    });
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} required minLength="3" />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} required minLength="10" />
      </div>
      <div>
        <label>Thumbnail Image</label>
        <input type="file" name="thumbnail" onChange={handleFileChange} accept=".jpg,.jpeg,.png" required />
      </div>
      <div>
        <label>Main Images (3 images)</label>
        <input type="file" name="mainImages" onChange={handleFileChange} accept=".jpg,.jpeg,.png" multiple required />
      </div>
      <div>
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleInputChange} required>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
          <option value="Groceries">Groceries</option>
        </select>
      </div>
      <div>
        <label>Stock</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} min="0" required />
      </div>
      <div>
        <label>Weight (grams)</label>
        <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} min="0" required />
      </div>
      <div>
        <label>Prices</label>
        {formData.prices.map((price, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Country Name"
              value={price.countryName}
              onChange={(e) => handleNestedChange(e, index, 'countryName', 'prices')}
              onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/g, '')}
              required
            />
            <input
              type="number"
              placeholder="Country Code"
              value={price.countryCode}
              onChange={(e) => handleNestedChange(e, index, 'countryCode', 'prices')}
              pattern="^\+?[0-9]*$"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={price.price}
              onChange={(e) => handleNestedChange(e, index, 'price', 'prices')}
              required
            />
            <button type="button" onClick={() => handleRemoveField('prices', index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('prices')}>Add Price</button>
      </div>
      <button type="submit">Submit</button>
    </form>
    <hr />

    <h2>Submitted Data</h2>
      {submittedData.length === 0 ? (
        <p>No data submitted</p>
      ) : (
        <>
            {submittedData.map((data, index) => (
                <ul key={index}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              <tr key={index}>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Title</td>
                        <td>{data.title}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{data.description}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>{data.category}</td>
                      </tr>
                      <tr>
                        <td>Stock</td>
                        <td>{data.stock}</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{data.weight}</td>
                      </tr>
                      <tr>
                        <td>Prices</td>
                        <td>
                          {data.prices.map((price, idx) => (
                            <div key={idx}>
                              <p>Country Name: {price.countryName}</p>
                              <p>Country Code: {price.countryCode}</p>
                              <p>Price: {price.price}</p>
                            </div>
                          ))}
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <br />
                </td>
              </tr>
              </ul>
            ))}
          </>
      )
      }
    </div> 
  );
};

export default ProductForm;
