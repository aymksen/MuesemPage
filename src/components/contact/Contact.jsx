import emailjs from '@emailjs/browser';
import "./contact.scss"
import {useState ,useRef } from "react";

const Result = () =>{
  return(
    <p>Your message has been sent !</p>
  );
};
   
export default function Contact (){
 
  
  const form = useRef();
  const [result,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uo38f3r',
     'template_ypp22rc',
      form.current,
       '-jK5NQ5BfNrqWsMFf'
       )
      .then((result) => {
          console.log(result.text);
          console.log("meesage sent");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
    return (
      
      <div className='contact' id="contact">
        <div className="container">
         <form ref={form} onSubmit={sendEmail}>
              <div class="formWord">
                <h2>Contact us !</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" placeholder="name" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="tel" placeholder="Phone Number (optional)" name="phone"/>
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100"  placeholder="Email Address" type="email" name="email" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea class="input100 message" name="message" placeholder="message...." required></textarea>
                <br />
                <button class="sumbit" value="Send">SUBMIT</button>

                <div class="row">
                   {result ? <Result /> :null} 
                  </div>
              </div>
            </form>
      </div>
      </div>
    )
  
}
