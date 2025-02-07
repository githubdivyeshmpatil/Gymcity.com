export default function FeaturesSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-2">
        {[
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#0A192F"/>
                <path d="M26 11V16M14 11V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.5 12V13.5M28.5 13.5V15M28.5 13.5H30M11.5 12V13.5M11.5 13.5V15M11.5 13.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26 13.5H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.2765 27H24.7235C25.961 27 26.5797 27 26.8356 26.6974C27.4163 26.0107 26.3038 25.1031 25.8979 24.6456C25.4405 24.1302 25.1059 24 24.4299 24H15.5701C14.8941 24 14.5595 24.1302 14.1021 24.6456C13.6962 25.1031 12.5837 26.0107 13.1644 26.6974C13.4203 27 14.039 27 15.2765 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 16V24M23 16V24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 27V29M16 27V29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            ), 
            title: "Weight Lifting", 
            description: "Weight lifting helps build strength by lifting heavy weights and improving muscle endurance."
          },
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#0A192F"/>
                <path d="M16 29C16 27.5858 16 26.8787 16.4393 26.4393C16.8787 26 17.5858 26 19 26H21C22.4142 26 23.1213 26 23.5607 26.4393C24 26.8787 24 27.5858 24 29V30H16V29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 21V26" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 30H26" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.0366 10.8665L22.0925 12.9957C22.2364 13.2921 22.6204 13.5764 22.9444 13.6309L24.8582 13.9515C26.082 14.1571 26.37 15.0524 25.4881 15.9355L24.0003 17.4356C23.7483 17.6897 23.6103 18.1796 23.6883 18.5305L24.1142 20.3875C24.4502 21.8574 23.6763 22.426 22.3864 21.6578L20.5926 20.5871C20.2687 20.3935 19.7347 20.3935 19.4048 20.5871L17.611 21.6578C16.3271 22.426 15.5472 21.8513 15.8832 20.3875L16.3091 18.5305C16.3871 18.1796 16.2491 17.6897 15.9971 17.4356L14.5093 15.9355C13.6334 15.0524 13.9154 14.1571 15.1392 13.9515L17.053 13.6309C17.371 13.5764 17.7549 13.2921 17.8989 12.9957L18.9548 10.8665C19.5307 9.71116 20.4666 9.71116 21.0366 10.8665Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            ), 
            title: "Strength Training", 
            description: "Strength training builds muscle mass and improves overall strength by using resistance."
          },
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#0A192F"/>
                <path d="M24.5841 14.0574C26.9187 14.0574 27.5461 17.2444 26.5423 19.3422C26.0933 20.2806 25.3165 21.1051 24.6946 21.9357C24.0982 22.7322 23.8 23.1304 23.408 23.4091C22.5339 24.0304 21.522 24 20.4897 24H19.4583C16.9193 24 15.6498 24 14.8109 23.2904C13.9721 22.5809 13.7668 21.3596 13.3561 18.917C13.1303 17.574 12.9713 16.2322 13.0043 14.9313C13.0648 12.549 14.8888 10.5427 17.3524 10.1487C18.526 9.96106 19.9711 9.94251 21.1454 10.1418C23.2422 10.4977 24.7207 12.3042 24.5741 14.3311C24.4847 15.5672 23.9831 16.8397 23.67 18.0344" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M15.0039 23.5V26C15.0039 27.8856 15.0039 28.8284 15.5897 29.4142C16.1755 30 17.1183 30 19.0039 30H20.0039C21.8895 30 22.8323 30 23.4181 29.4142C24.0039 28.8284 24.0039 27.8856 24.0039 26V23" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M15.0039 27H18.0039" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            ), 
            title: "Musculation", 
            description: "Musculation refers to exercises aimed at increasing muscle mass and physical strength."
          },
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#0A192F"/>
                <path d="M18.5054 23.0102L25.14 18.4989C25.3273 18.3598 25.4944 18.1955 25.6363 18.0112C26.1217 17.3804 26.1121 16.5055 25.8044 15.7737C25.1198 14.1451 23.4952 13 21.6 13C20.6644 13 19.7948 13.2791 19.0717 13.7576L11.9922 18.7567" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.9951 21.5066C13.9951 22.2026 14.3637 23.5859 16.0358 23.9655C17.0418 24.1939 19.9726 23.2305 18.5386 20.4385C17.1047 17.6466 13.6515 17.632 12.2468 18.5675C11.3884 19.0889 9.72132 20.7163 10.0374 22.8796C10.1496 24.1903 11.1816 26.8496 14.4124 27.0017H24.3037C25.2255 26.9286 25.416 26.7949 26.1181 26.2562C27.0626 25.408 28.6401 23.8485 29.5565 22.8218C29.7545 22.6 29.9682 22.3717 29.9956 22.0757C30.1413 20.499 27.7488 21.1819 26.0157 20.994" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            ), 
            title: "Cardio", 
            description: "Cardio exercises help to improve heart health, stamina, and endurance."
          }
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full text-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold  rajdhani-font">{item.title}</h3>
              <p className="text-gray-600 text-sm font-roboto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4" data-aos="flip-left">
        {["img/Recta1.png", "img/rect3.png", "img/Rect.png"].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Gym Image"
            className="w-72 h-40 object-cover rounded-lg "  // Increased width here
          />
        ))}
      </div>
    </div>
  );
}
