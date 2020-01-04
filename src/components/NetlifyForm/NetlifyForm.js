import React, { useState } from "react";
// @material-ui/core components

export default function NetlifyForm(props) {
  const [name,setName] = useState(props.name);
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState(props.email);
  const [message,setMessage] = useState(props.message);

 
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  // function checkEmail() {
  //   validator.isEmail(values.email) ? setEmailSuccess(false) : setEmailSuccess(true)
  // }

  // function checkMsg() {
  //   !validator.isEmpty(values.message) ? setMsgSuccess(false) : setMsgSuccess(true)
  // }
  //TODO: add checkName function to check validation on blur
  return (
    <div>
      <form hidden onSubmit={handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );

  
}
