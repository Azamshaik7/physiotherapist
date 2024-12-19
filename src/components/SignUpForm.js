import React, { useState } from 'react';
import signUpImage from '../images/login-col-left-img.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signupform.css';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post('https://physiotherapy-backend1.onrender.com/api/auth/signup', {
        name,
        email,
        password,
      });

      // Handle success
      if (response.status === 201) {
        alert('Account created successfully!');
        navigate('/sign-in'); // Redirect to the login page
      }
    } catch (err) {
      // Handle errors from the backend
      if (err.response) {
        setError(err.response.data.message || 'An error occurred during signup');
      } else {
        setError('Failed to connect to the server. Please try again.');
      }
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  {/* Form Column */}
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      {/* Name Input */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Password Input */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Confirm Password Input */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Repeat your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="form-check d-flex justify-content-start mb-5">
                        <input className="form-check-input me-2 border" type="checkbox" id="terms" required />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      {/* Buttons */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                        <Link to="/sign-in" className="btn btn-danger btn-lg ms-3">
                          Sign In
                        </Link>
                      </div>
                    </form>
                  </div>

                  {/* Image Column */}
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={signUpImage}
                      className="img-fluid"
                      alt="Sign Up Illustration"
                      style={{ height: '100%', objectFit: 'cover', borderRadius: '25px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
