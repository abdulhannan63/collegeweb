import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png';
import mail from '../../assets/mail-icon.png';
import phone from '../../assets/phone-icon.png';
const Contact = () => {
  const [result, setResult] = React.useState("");
  // the Email sending functionality was taken from the 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "307c7c76-809a-4df4-8502-e1dc49f2a01c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success",res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>Send us message <img src={msg} alt='message' /></h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae impedit distinctio vero odio iure quod voluptates quos laborum ipsam et, aperiam suscipit minus aliquam voluptatum facilis obcaecati quidem ut velit eius dolore nihil. Accusamus sapiente exercitationem modi iusto expedita pariatur.</p>
          <ul>
            <li> <img src={mail} alt="" />   contact@ahj.dev</li>
            <li> <img src={phone} alt="" />   885-179-0000</li>
            <li>77 massachusetts Ave,Cambridge</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='enter Your name' required />
            <label>Phone Number</label>
            <input type="tel" name='Phone' placeholder='Enter Your Number' required />
            <label >Write Your message here</label>
            <textarea name="message" rows="6" placeholder='Enter Your message' required />
            <button type='submit'  className='btn dark-btn'> Submit &#10159;</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  )
};
export default Contact;