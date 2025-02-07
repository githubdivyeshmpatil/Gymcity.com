import React from 'react';

function Footer() {
  return (
<div className="bg-black bg-cover text-black bg-center text-white bg-no-repeat py-16 mt-24" style={{ backgroundImage: 'url("/img/footer-bg.jpg")' }}>
<div className="container- mx-auto px-6">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        
          <div>
          <img src="/img/logo.png" alt="Company Logo" className="w-24 h-24" />

            <p className="mt-6 text-sm sm:text-base font-semibold text-gray-700">
            Your transformation starts here! Join us to reach your fitness goals with expert trainers and top-notch equipment.</p>

          </div>


          <div>
            <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-teal-600 via-teal-700 to-blue-800 bg-clip-text text-transparent">
              Quick Links
            </h2>
            <ul className="space-y-4">
              {[
                'About Us', 
                'Membership', 
                'UI/UX Design', 
                'Flutter Developer', 
                'React Js Developer', 
                'Android Developer'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img src="/img/webr.png" alt="Arrow Icon" className="w-4 h-4" />
                  <p className="font-semibold">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-teal-600 via-teal-700 to-blue-800 bg-clip-text text-transparent">
              Follow Us
            </h2>
            <ul className="space-y-4">
  {[
    { name: 'Instagram', imgSrc: '/img/insta.png' },
    { name: 'Dribble', imgSrc: '/img/dri.png' },
    { name: 'Facebook', imgSrc: '/img/face.png' },
    { name: 'Twitter', imgSrc: '/img/twi.png' }
  ].map((social, index) => (
    <li key={index} className="flex items-center space-x-4">
      <img src={social.imgSrc} alt={`${social.name} Icon`} className="w-7" />
      <p className="font-semibold">{social.name}</p>
    </li>
  ))}
</ul>
</div>

      
          <div>
            <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-teal-600 via-teal-700 to-blue-800 bg-clip-text text-transparent">
              Address
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <img src="/img/loca.png" alt="Location Icon" className="w-7" />
                <p className="font-semibold">2/20, Astern Road, USA</p>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/img/email.png" alt="Email Icon" className="w-7" />
                <p classname="font-semibold">example@example.com</p>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/img/phone.png" alt="Phone Icon"  className="w-7" />
                <p className="font-semibold">+880 320 432 242</p>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:text-left items-center sm:items-start text-center">
        
            <p className="mt-4 sm:mt-0 text-sm text-black font-semibold">
              © Murait Technologies 2024 | All Rights Reserved
            </p>
            <p className="text-sm text-black font-semibold space-y-2 space-x-5 sm:space-y-0">
              <span className="block sm:inline mb-2 sm:mb-0">Terms & Conditions</span>
              <span className="block sm:inline mb-2 sm:mb-0">Privacy Policy</span>
              <span className="block sm:inline mb-2 sm:mb-0">Contact Us</span>
            </p>

    
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;