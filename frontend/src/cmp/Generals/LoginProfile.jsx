import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userService } from '../../services/user.service';
import { loginUser } from '../../store/actions/user.actions';

export default function LoginProfile({onAddPopupLog}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
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
        if (existingUser){
          if(existingUser.password != formData.password)
          {
            alert('Wrong password')
          }
          else
          {
            await loginUser(existingUser)
            onAddPopupLog()
          }
        } else {
            alert('User not exists with this email.')
        }
    } 
    catch (err) {
        console.log('Error saving user:', err);
    }
}

  return (
    <div className="container">
    <h2>Log in</h2>
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
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
  );
}