"use client";
import React, { useState } from 'react';
import axios from 'axios';
import  Checkbox  from "@/components/Checkbox";


interface ContactFormProps {
    onSubmitSuccess?: () => void;
  }

const Kontaktformular: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
    const [firma, setFirma] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [checked, setChecked] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!checked) {
        setError('Bitte akzeptiere die Datenschutzerklärung.');
        return;
    }

      setIsSubmitting(true);
      setError('');

      try {
        const response = await axios.post('/api/send-email', {
          firma,
          name,
          email,
          phone,
          message,
        });

        if (response.status === 200) {
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          onSubmitSuccess?.();
          setIsSubmitted(true);
        } else {
          setError('Fehler beim Senden der E-Mail. Bitte versuche es später erneut.');
        }
      } catch (err) {
        setError('Fehler beim Senden der E-Mail. Bitte versuche es später erneut.');
      }

      setIsSubmitting(false);
      
    };

    
    return(
        <div>
          {!isSubmitted ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              
              <input 
                  placeholder='Firma'
                  className='bg-primaryGray opacity-85 p-2 text-lg border-2 border-secondaryGray text-white'
                  type="text"
                  id="firma"
                  value={firma}
                  onChange={(e) => setFirma(e.target.value)}
              />

              <input 
                  placeholder='Name' 
                  className='bg-primaryGray opacity-85 p-2 text-lg border-2 border-secondaryGray text-white'
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
              
              <input 
                  placeholder='Email' 
                  className='bg-primaryGray opacity-85 p-2 text-lg border-2 border-secondaryGray text-white'
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              
              <input 
                  placeholder='Telefon' 
                  className='bg-primaryGray opacity-85 p-2 text-lg border-2 border-secondaryGray text-white'
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
              />
              
              <textarea 
                  placeholder='Nachricht' 
                  className='bg-primaryGray opacity-85 p-2 text-lg border-2 border-secondaryGray text-white'
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
              />
          

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className='flex flex-col text'>
                  <p className='text'>Datenschutzerklärung</p>
                  <div className="flex flex-row gap-2">
                      <div className='pt-1'>
                          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
                      </div>
                      <label className='text-textGray font-light text-'>ja, ich habe die Datenschutzerklärung gelesen und akzeptiert.</label>
                  </div>
              </div>
              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn xl:text-lg rounded-full h-[45px] w-full disabled:bg-gray-400 disabled:text-gray-100"
              >
                  {isSubmitting ? 'Sende...' : 'Senden'}
              </button>
          </form>
          ) : (
            <h1 className='text-white xl:text-5xl text-center lg:text-4xl mdl:text-4xl md:text-4xl sm:text-3xl'>Vielen Dank, Ihre Nachricht wurde erfolgreich versendet</h1>
          )}
        </div>
    )
}

export default Kontaktformular;

// "use client";
 
// import { useState } from "react";
 
// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);
 
//   async function handleSubmit(event: any) {
//     event.preventDefault();
//     setLoading(true);
 
//     const data = {
//       name: String(event.target.name.value),
//       email: String(event.target.email.value),
//       message: String(event.target.message.value),
//     };
 
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
 
//     if (response.ok) {
//       console.log("Message sent successfully");
//       setLoading(false);
//       // reset the form
//       event.target.name.value = "";
//       event.target.email.value = "";
//       event.target.message.value = "";
//     }
//     if (!response.ok) {
//       console.log("Error sending message");
//       setLoading(false);
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="w-full flex flex-col my-4">
//         <label
//           className="font-bold text-gray-800"
//           htmlFor="name"
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           minLength={3}
//           maxLength={150}
//           required
//           className=" p-4 bg-gray-50 border border-gray-100 "
//           autoComplete="off"
//           id="name"
//         />
//       </div>
//       <div className="w-full flex flex-col my-4">
//         <label
//           className="font-bold text-gray-800"
//           htmlFor="email"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           minLength={5}
//           maxLength={150}
//           required
//           className=" p-4 bg-gray-50 border border-gray-100 "
//           autoComplete="off"
//           id="email"
//         />
//       </div>
//       <div>
//         <label
//           className="font-bold text-gray-800"
//           htmlFor="message"
//         >
//           Message
//         </label>
//         <textarea
//           rows={4}
//           required
//           minLength={10}
//           maxLength={500}
//           name="message"
//           className="w-full p-4 bg-gray-50 border border-gray-100 "
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }