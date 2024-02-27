import React, { useState } from 'react'
import { loginUser, saveUser, signUp } from '../../store/actions/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { userService } from '../../services/user.service'

export default function Profile() {

  const [isPopup, setPopup] = useState(false)
  const [isPopupLog, setPopupLog] = useState(false)
  const [isPopupSign, setPopupSign] = useState(false)


  const dispatch = useDispatch();
  const users = useSelector(storeState => storeState.userModule.users);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });


  function onAddPopupProfile() {
    setPopup(!isPopup)
  }

  function onAddPopupLog() {
    setPopupLog(!isPopupLog)
    setPopupSign(false)
  }
  function onAddPopupSign() {
    setPopupSign(!isPopupSign)
    setPopupLog(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPopupSign) {
        try {
            const existingUser = await userService.getByEmail(formData.email)
            if (!existingUser) {
                // Dispatch the action to save the user
                await dispatch(saveUser(formData)); // Dispatch the saveUser action with the user object
                setPopupLog(false)
                setPopupSign(false)
                const currentUser = await users.currentUser
                console.log("current user: ", currentUser);
            } else {
                alert('User already exists with this email.');
            }
            // Clear the form fields after submission
            setFormData({
                username: '',
                email: '',
                password: ''
            });
        } catch (err) {
            console.log('Error saving user:', err);
        }
    } else if (isPopupLog) {
      try {
        const existingUser = await userService.getByEmail(formData.email)
        if (!existingUser) {
          alert('User email not exsits');
        } 
        else if (existingUser.password !== formData.password) {
          alert('Incorrect password');
        }
        else{
          setPopupLog(false)
          setPopupSign(false)
          signUp(existingUser)
          const currentUser = await users.currentUser
          console.log("current user: ", currentUser);
        }
        // Clear the form fields after submission
        setFormData({
            username: '',
            email: '',
            password: ''
        });
      } catch (err) {
        console.log('Error saving user:', err);
      }
    }
}


  return (
    <section className="profile-bar">
      <div className="text-profile-div">
        <a href="">Airbnb your home</a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ height: "16px", width: "16px", fill: "currentcolor" }}><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
        </button>
        <div onClick={onAddPopupProfile} className="user-btn-profile">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: 3, overflow: "visible"}}><g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "32px", width: "32px", marginLeft: "14px", fill: "currentcolor"}}><path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path></svg>
          {/* <img src="/images/users/rave.webp" alt="" /> */}
          <div className={isPopup ? "popup-profile" : "not-popup-profile"}>
            <div onClick={onAddPopupLog} >Log in</div>
            <div onClick={onAddPopupSign}>Sign in</div>
            <div>Gift card</div>
            <div>Airbnb your home</div>
          </div>
        </div>
      </div>

      <div className={isPopupLog || isPopupSign ? "popup-log" : "not-popup-log"}>
        <header>
          {isPopupLog && <button onClick={() => setPopupLog(false)}>X</button>}
          {isPopupSign && <button onClick={() => setPopupSign(false)}>X</button>}
          <span className="welcome-message">Welcome!</span>
        </header>
        <hr />
        {isPopupSign && <div class="container">
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
        }
        {isPopupLog &&
        <div class="container">
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
        }
      </div>
    </section>
  )
}
