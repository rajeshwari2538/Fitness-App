import React, { useEffect, useState } from 'react';
import contactBg from '../assets/contact-bg.jpg';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_s37ou4o';
    const templateId = 'template_7qwmioo';
    const publicKey = '_GxxvNi-s8tbcSh9I';

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Rajeshwari Gadagi',
        message: message,
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response) => {
        setIsSuccessMessageVisible(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
            setIsSuccessMessageVisible(false);
          }, 5000);
    })
    .catch((error) => {
        console.error('Error sending email:',error);
    })
  }

  return (
    <div
      className={`bg-cover bg-center w-full sm:w-[80%] mx-auto min-h-screen`}
      style={{
        backgroundImage: !isSmallScreen && `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactBg})`,
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="max-w-full sm:max-w-6xl mx-auto px-4 py-12 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-12 mb-8 sm:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">Contact</h2>
            <div className="text-white py-10 pr-2">
              <div className="flex items-center mb-8 md:mb-4">
                 <img src='https://cdn-icons-png.freepik.com/512/8476/8476964.png' className='h-14 mr-4'/>
                 <div>
                   <p className="md:text-2xl text-xl font-bold mb-4 md:mb-2">Open Hours</p>
                   <ul>
                     <li>Mon-Fri: 9 AM – 6 PM</li>
                     <li>Saturday: 9 AM – 4 PM</li>
                     <li>Sunday: Closed</li>
                   </ul>
                 </div>
              </div>
              <div className="flex items-center mb-8 md:mb-4">
                <img src='https://cdn-icons-png.flaticon.com/512/4942/4942069.png' className='h-14 mr-4'/>
                <div>
                  <p className='text-xl md:text-2xl font-bold mb-2'>Address</p>
                  <p>2101 X Street,Y cross, MG Road, Bangalore</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src='https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png' className='h-14 mr-4'/>
                <div>
                  <p className='md:text-2xl text-xl font-bold mb-2'>Email</p> 
                  <p>rajeshwarigadagi@gmail.com</p>
                  <p>+91-8217864544</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[30rem] mt-10 md:mt-0 pr-0 sm:pr-8">
            <h2 className="md:text-4xl text-2xl font-bold mb-8 text-white">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-white mb-2">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-neutral-800 text-white rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-white mb-2">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-neutral-800 text-white rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-white mb-2">Message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="w-full bg-neutral-800 text-white rounded-md p-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
              {isSuccessMessageVisible && (
                <div className="bg-green-200 text-green-800 rounded-md p-4 mt-4">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>  
        </div>
      </div>
      <div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9545523634383!2d77.60681231065524!3d12.9747586872881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1687393dbc13%3A0x8b70c8e652b73d9e!2sMahatma%20Gandhi%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714038126004!5m2!1sen!2sin" 
            className='w-[100%] h-[300px] md:h-[400px] mx-auto ' 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
    </div>
  );
};

export default Contact;
