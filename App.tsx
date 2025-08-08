import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pan: '',
    aadhar: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation (you can add more comprehensive validation here)
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.pan ||
      !formData.aadhar ||
      !formData.location
    ) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('KYC Form Data:', formData);
    // Here you would typically send the data to a backend API
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5', // Subtle background color
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff', // White background for the form container
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Enhanced shadow
        width: '100%',
        maxWidth: '500px', // Limit form width on larger screens
        boxSizing: 'border-box'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#333', // Darker color for heading
          fontSize: '24px'
        }}>KYC Validation</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="phone" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="address" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="pan" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>PAN Number:</label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="Enter your PAN number"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="aadhar" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Aadhaar Number:</label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              placeholder="Enter your Aadhaar number"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="location" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Location:</label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pan">PAN Number:</label>
          <input
            type="text"
            id="pan"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="Enter your PAN number"
            required
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadhar">Aadhaar Number:</label>
          <input
            type="text"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            placeholder="Enter your Aadhaar number"
            required
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            }}
            onFocus={(e) => e.target.style.borderColor = '#007bff'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>
          <button type="submit" style={{
            padding: '12px 20px',
            backgroundColor: '#007bff', // Primary button color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            marginTop: '10px'
          }}
          onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#007bff'}
          >
            Submit KYC
          </button>
        </form>
      </div>
    </div>
  )
}

export default App


