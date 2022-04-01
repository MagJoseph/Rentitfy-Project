import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p >Please leave us your contact information and our Agent will get back to you.</p>
           <form className="contact-info">
           <input type="text" placeholder={"First Name"} />
           <input type="text" placeholder={"Last Name"} />
           <input type="text" placeholder={"Phone Number"} />
           <input type="text" placeholder={"Email Address"} />
           <input className="m-input" type="text" placeholder={"Message"} />
           <button className="contact-btn">Submit</button>
           </form>
    </div>
  )
}

export default Contact