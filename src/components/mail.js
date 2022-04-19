import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let userName = String(document.getElementById("user_name").value);
    let dest = String(document.getElementById("user_email").value);   

    let templateParams ={
      from_name: "Administrador",
      user_name: userName,
      destinatario: dest,
      message: "Gracias por utilizar nuestros servicios. Esperamos que tengas una excelente experiencia con Buon Appetito.",
    };
     // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.send('service_kd00g6g', 'template_zghtsvk', templateParams, 'zu36obM0kMdrA0dIG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" id="user_name" name="user_name" />
      <label>Email</label>
      <input type="email" id="user_email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Mail;
