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
               
                
                <input class="input100" placeholder="name" type="text" name="fullName" required />
                
                
                
                <input class="input100" type="tel" placeholder="Phone Number (optional)" name="phone"/>
                
                
                
                <input class="input100"  placeholder="Email Address" type="email" name="email" required />
                
              </div>
              <div class="formWord">
                
                
                <textarea class="input100 message" name="message" placeholder="message...." required></textarea>
                
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
