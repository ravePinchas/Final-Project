import React, { useState } from 'react';
// import { userService } from '../services/user.service';
import { saveUser } from '../../store/actions/user.actions';
import { userService } from '../../services/user.service';

export default function SignUp({onAddPopupSign}) {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const existingUser = await userService.getByEmail(formData.email)
        if (!existingUser){
          var newUser = {
            email: formData.email,
            username: formData.username,
            password: formData.password
          }
          await saveUser(newUser)
          onAddPopupSign()
        } else {
            alert('User already exists with this email.')
        }
    } 
    catch (err) {
        console.log('Error saving user:', err);
    }
}

  return (
    <div className="container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
           <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>
          </form>
    </div>
  );
}