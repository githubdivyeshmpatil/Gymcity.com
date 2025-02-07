import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



const plans = [
  {
    name: "1 Month",
    price: "₹3000/-",
    features: ["1 Month", "General Trainer", "Full Gym Access"],
    notIncluded: ["Zumba and Yoga complementary"],
  },
  {
    name: "3 Months",
    price: "₹8000/-",
    features: ["3 Months", "Personal Trainer", "Steam & Sauna"],
    notIncluded: ["Diet Plan"],
  },
  {
    name: "6 Months",
    price: "₹15000/-",
    features: ["6 Months", "Premium Trainer", "All VIP Access"],
    notIncluded: ["Massage Therapy"],
  },
];

export default function GymMembershipCards() {
  return (
    <>
   
    <div className="min-h-40 bg-gray-900 flex items-center justify-center p-4 md:p-8">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-black rounded-2xl p-6 shadow-xl text-white relative overflow-hidden flex flex-col items-center w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Top Circle Design */}
            <div className="absolute top-0 left-0 w-full h-28 bg-[#2781c3] rounded-b-full"></div>

            {/* Icon with Rotation Effect */}
            <div className="relative flex justify-center mt-12">
              <motion.div
                className="w-20 h-20 bg-black flex items-center justify-center rounded-full border-4 border-lime-500"
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 720 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img src="img/op.png" alt="Gym Icon" className="w-12 h-12" />
              </motion.div>
            </div>

            {/* Plan Info */}
            <div className="text-center mt-6">
              <h2 className="text-xl font-bold">{plan.name}</h2>
              <p className="text-3xl font-bold text-cyan-400">{plan.price}</p>
            </div>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-sm w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 border-b pb-1 border-dashed border-gray-600">
                  <span className="text-green-500"><FaCheck />
                  </span> <span>{feature}</span>
                </li>
              ))}
              {plan.notIncluded.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-red-700"><RxCross2 size={18} />
                  </span> <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-6 text-center w-full">
            <button>
    B U Y N O W
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
