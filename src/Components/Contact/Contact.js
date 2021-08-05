import React from "react";
import "./Contact.css";
class Contact extends React.Component {
render() {
  return (
    <div className="contact">
    <div className="Contact_page">
    <p className="labels">Contact Me</p>
    <div className="contact_image">
      <img src="contact2.jpg"></img>
    </div>
    <div>
    <form action="/action_page.php">
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email.." />


    <label>Message</label>
    <textarea id="subject" name="subject" placeholder="Your message.."></textarea>
    <input type="submit" value="Send" />
    </form>
    </div>
    </div>
    </div>
  );
}
}


export default Contact;