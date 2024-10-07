import React, { useState } from 'react';
import style from '../SignUp.module.css'; // Assuming you have a CSS file for styles
import { AnimatePresence } from 'framer-motion';
import Test from '../Component/Test'

function SignUpForm() {
  // Define state for the form fields
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNumber: '',
    userExtrovert: '',
    userSensing: '',
    userThinking: '',
    userJudger:''
  });

  // Handle change for text and select inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showForm,setShowForm] = useState(true)
  const [showAssesmentform,setShowAssesmentForm] = useState(false);
  const [successSubmit,setSuccessSubmit] = useState(false);
  // Handle checkbox input for user interests
  const handleCheckboxChange = (e) => {
    // const { value, checked } = e.target;
    // setFormData((prevFormData) => {
    //   const updatedInterests = checked
    //     ? [...prevFormData.userInterest, value]
    //     : prevFormData.userInterest.filter((interest) => interest !== value);

    //   return {
    //     ...prevFormData,
    //     userInterest: updatedInterests,
    //   };
    // });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const showAssesment = ()=>{
    setShowForm(false)
    setShowAssesmentForm(true)
  }
  return (
    <>
    <AnimatePresence>
      {
        showForm && <form className={style.formContainer} onSubmit={handleSubmit}>
        <div style={{display: 'flex',
      flexDirection: 'column'}}>
        <h3 style={{textAlign:'center',marginTop:'1rem',marginBottom:'1rem'}}>Sign In</h3>
        <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label" >Full Name</label>
      <input type="text" className="form-control" id="exampleInputText1" placeholder='Enter Full Name' aria-describedby="emailHelp" value={formData.userName} name='userName' onChange={handleInputChange} />
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" placeholder='Enter Email' id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.userEmail} name='userEmail' onChange={handleInputChange} />
    </div>
    <div className="mb-3">
    <label for="phoneNumber" className="form-label">Enter Phone Number</label>
    <div className="input-group">
      <select 
        id="countryCode" 
        aria-describedby="countryCodeHelp" 
        value={formData.countryCode} 
        name='countryCode' 
        onChange={handleInputChange}
      >
        <option value="+1">+1 (USA)</option>
        <option value="+44">+92 (PK)</option>
        <option value="+91">+91 (India)</option>
        <option value="+44">+44 (UK)</option>
      </select>
      <input 
        type="tel" 
        className="form-control" 
        id="mobileNumber" 
        aria-describedby="mobileNumberHelp" 
        value={formData.mobileNumber} 
        name='mobileNumber' 
        onChange={(e)=>{
          const regex = /^[0-9\b]+$/;
          if (e.target.value === '' || regex.test(e.target.value)) {
            handleInputChange(e)
          }
        }} 
        pattern="[0-9]*" 
        maxLength="10" 
      />
    </div>
  </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" placeholder='Enter Password' className="form-control" id="exampleInputPassword1" value={formData.userPassword} name='userPassword' onChange={handleInputChange} />
    </div>
    <button type="button" onClick={showAssesment} className="btn btn-primary">Submit</button>
    </div>
  </form>
      }
    </AnimatePresence>
        <AnimatePresence>
{
  showAssesmentform && <div className={`${style.radioContainer}`} style={{ padding: '2rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
    <div style={{position:'absolute',right:'16vw',fontSize:'1.2rem',color:'blue',cursor:'pointer',textDecoration:'underline'}} onClick={()=>{
      setShowAssesmentForm(false)
      setSuccessSubmit(true)
    }} >Skip</div>
  <div style={{ marginBottom: '1.5rem',paddingBottom:'1rem',borderBottom:'1px solid black' }}>
    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>I'm</p>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="personalityType" id="extrovert" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userExtrovert"]: "Extrovert",
    });
    document.querySelector("#introvert").style.borderColor = "#fd8a8a"
    document.querySelector("#extrovert").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="extrovert" style={{ fontSize: '1.1rem' }}>
          Extrovert
        </label>
        <span>
          <img src="/RadioImages/Extra.jpg" alt="Extrovert" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="personalityType" id="introvert" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userExtrovert"]: "Introvert",
    });
    document.querySelector("#introvert").style.borderColor = "#EFF1F3"
    document.querySelector("#extrovert").style.borderColor = "#fd8a8a"
        }} />
        <label className="form-check-label" htmlFor="introvert" style={{ fontSize: '1.1rem' }}>
          Introvert
        </label>
        <span>
          <img src="/RadioImages/In.jpg" alt="Introvert" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
    </div>
  </div>

  <div style={{ marginBottom: '1.5rem',paddingBottom:'1rem',borderBottom:'1px solid black' }}>
    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>I'm</p>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="sensingType" id="sensing" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userSensing"]: "Sensing",
    });
    document.querySelector("#intuition").style.borderColor = "#fd8a8a"
    document.querySelector("#sensing").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="sensing" style={{ fontSize: '1.1rem' }}>
          Sensing
        </label>
        <span>
          <img src="/RadioImages/Se.png" alt="Sensing" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="sensingType" id="intuition" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userSensing"]: "Intuition",
    });
    document.querySelector("#sensing").style.borderColor = "#fd8a8a"
    document.querySelector("#intuition").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="intuition" style={{ fontSize: '1.1rem' }}>
          Intuition
        </label>
        <span>
          <img src="/RadioImages/iNt.png" alt="Intuition" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
    </div>
  </div>

  <div style={{ marginBottom: '1.5rem',paddingBottom:'1rem',borderBottom:'1px solid black' }}>
    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>I'm</p>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="thinkType" id="thinker" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userThinking"]: "Thinker",
    });
    document.querySelector("#feeler").style.borderColor = "#fd8a8a"
    document.querySelector("#thinker").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="sensing" style={{ fontSize: '1.1rem' }}>
        Thinker
        </label>
        <span>
          <img src="/RadioImages/Think.jpg" alt="Sensing" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="thinkType" id="feeler" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userThinking"]: "Feeler",
    });
    document.querySelector("#thinker").style.borderColor = "#fd8a8a"
    document.querySelector("#feeler").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="intuition" style={{ fontSize: '1.1rem' }}>
        Feeler
        </label>
        <span>
          <img src="/RadioImages/Feel.jpg" alt="Intuition" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
    </div>
  </div>

  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>I'm</p>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="judgeType" id="Judger" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userJudger"]: "Judger",
    });
    document.querySelector("#Perceiver").style.borderColor = "#fd8a8a"
    document.querySelector("#Judger").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="sensing" style={{ fontSize: '1.1rem' }}>
        Judger
        </label>
        <span>
          <img src="/RadioImages/Think.jpg" alt="Sensing" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input className="form-check-input" type="radio" name="judgeType" id="Perceiver" style={{borderColor:'#fd8a8a'}} onClick={()=>{
          setFormData({
      ...formData,
      ["userJudger"]: "Perceiver",
    });
    document.querySelector("#Judger").style.borderColor = "#fd8a8a"
    document.querySelector("#Perceiver").style.borderColor = "#EFF1F3"
        }} />
        <label className="form-check-label" htmlFor="intuition" style={{ fontSize: '1.1rem' }}>
        Perceiver
        </label>
        <span>
          <img src="/RadioImages/Per.jpg" alt="Intuition" style={{ borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} />
        </span>
      </div>
    </div>
  </div>
  

  <button type="button" onClick={()=>{
    setShowAssesmentForm(false)
    setSuccessSubmit(true)
  }} className="btn btn-primary" style={{
    padding: '0.8rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }}
  >
    Submit
  </button>
</div>
}
        </AnimatePresence>
        <AnimatePresence>
          {
            successSubmit && <Test />
          }
        </AnimatePresence>
  </>


  );
}

export default SignUpForm;
