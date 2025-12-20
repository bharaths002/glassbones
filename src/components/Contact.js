// import "./Contact.css";
// import React from "react";
// import { FaWhatsapp, FaInstagram, FaYoutube, FaPhone, FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// function Contact() {
//   return (
//     <section
//       id="contact-us"
//       className="bg-blue-500 text-white p-6 md:p-8 md:min-h-screen"
//     >
//       <div className="flex flex-col items-center md:justify-center max-w-4xl mx-auto space-y-6 md:space-y-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-center">
//           Get in Touch
//         </h2>
//         <p className="text-lg text-center max-w-2xl">
//           We would love to hear from you! Please fill out the form below and we
//           will get back to you as soon as possible.
//         </p>

//         <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
//           {/* Contact Form */}
//           <form
//             action="#"
//             method="post"
//             className="space-y-6 text-gray-900 dark:text-gray-300"
//           >
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-lg font-medium mb-2"
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 transition transform duration-300"
//                 type="text"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-lg font-medium mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 transition transform duration-300"
//                 type="email"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-lg font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 className="w-full p-3 rounded-lg border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 transition transform duration-300"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>

//             {/* Social Media + Send Button */}
//             <div className="flex items-center justify-between mt-6">
//               <ul className="example-2 flex">
//                 <li className="icon-content">
//                   <a
//                     href="https://wa.me/+919360460661"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     data-social="whatsapp"
//                   >
//                     <div className="filled"></div>
//                     <FaWhatsapp />
//                   </a>
//                 </li>

//                 <li className="icon-content">
//                   <a
//                     href="https://www.instagram.com/glassbonescreatives?igsh=OHFxODk3a3Y0aGg4"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     data-social="instagram"
//                   >
//                     <div className="filled"></div>
//                     <FaInstagram />
//                   </a>
//                 </li>

//                 <li className="icon-content">
//                   <a
//                     href="https://x.com/yourprofile"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     data-social="x"
//                   >
//                     <div className="filled"></div>
//                     <FaXTwitter />
//                   </a>
//                 </li>

//                 <li className="icon-content">
//                   <a
//                     href="https://youtube.com/yourchannel"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     data-social="youtube"
//                   >
//                     <div className="filled"></div>
//                     <FaYoutube />
//                   </a>
//                 </li>

//                 <li className="icon-content">
//                   <a href="tel:+91 9360460661" data-social="phone">
//                     <div className="filled"></div>
//                     <FaPhone className="invert-phone" />
//                   </a>
//                 </li>
//                 <li className="icon-content">
//                   <a href="https://www.facebook.com/share/16a7YRxe5R/" data-social="facebook">
//                     <div className="filled"></div>
//                     <FaFacebook />
//                   </a>
//                 </li>
//               </ul>

//               <button
//                 className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="submit"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import "./Contact.css";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      // ✅ Add your Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setLoading(false);

      if (response.ok) {
        setSuccess(true);
        e.target.reset();

        // ✅ Redirect after success
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-blue-500 text-white p-6 md:p-8 md:min-h-screen"
    >
      <div className="flex flex-col items-center md:justify-center max-w-4xl mx-auto space-y-6 md:space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Get in Touch
        </h2>

        <p className="text-lg text-center max-w-2xl">
          We would love to hear from you! Please fill out the form below and we
          will get back to you as soon as possible.
        </p>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-gray-900 dark:text-gray-300"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 transition"
              ></textarea>
            </div>

            {/* ✅ Success Message */}
            {success && (
              <p className="success-message">
                ✅ Message sent successfully! Redirecting...
              </p>
            )}

            {/* Social Media + Button */}
            <div className="flex items-center justify-between mt-6">
              <ul className="example-2 flex">
                <li className="icon-content">
                  <a
                    href="https://wa.me/+919360460661"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="whatsapp"
                  >
                    <div className="filled"></div>
                    <FaWhatsapp />
                  </a>
                </li>

                <li className="icon-content">
                  <a
                    href="https://www.instagram.com/glassbonescreatives"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="instagram"
                  >
                    <div className="filled"></div>
                    <FaInstagram />
                  </a>
                </li>

                <li className="icon-content">
                  <a
                    href="https://x.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="x"
                  >
                    <div className="filled"></div>
                    <FaXTwitter />
                  </a>
                </li>

                <li className="icon-content">
                  <a
                    href="https://youtube.com/yourchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social="youtube"
                  >
                    <div className="filled"></div>
                    <FaYoutube />
                  </a>
                </li>

                <li className="icon-content">
                  <a href="tel:+919360460661" data-social="phone">
                    <div className="filled"></div>
                    <FaPhone className="invert-phone" />
                  </a>
                </li>

                <li className="icon-content">
                  <a
                    href="https://www.facebook.com/share/16a7YRxe5R/"
                    data-social="facebook"
                  >
                    <div className="filled"></div>
                    <FaFacebook />
                  </a>
                </li>
              </ul>

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 text-white rounded-lg shadow-lg transition transform duration-300
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

