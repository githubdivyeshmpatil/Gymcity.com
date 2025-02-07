import { useState, useEffect } from "react";
import CountUp from "react-countup";

const StatsCounter = () => {
  const stats = [
    { value: 5, suffix: "+", label: "Years of Service" },
    { value: 10, suffix: "+", label: "Certified Trainers" },
    { value: 786, suffix: "+", label: "Happy Members" },
    { value: 95, suffix: "%", label: "Customer Satisfaction" },
  ];

  // State to trigger the counter to rerun every 4 seconds
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);  // Increment the trigger state
    }, 4000);  // Trigger every 4 seconds

    return () => clearInterval(interval);  // Clean up the interval on unmount
  }, []);

  return (
    <div className="bg-black text-white py-6 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-wrap justify-center space-x-6 sm:space-x-12 md:space-x-16 lg:space-x-24">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1 min-w-[150px] max-w-[250px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <CountUp 
                key={trigger}  // Use the trigger as the key to reset the animation
                start={0} 
                end={stat.value} 
                duration={3} 
                delay={0} 
              />{stat.suffix}
            </h2>
            <p className="text-xl sm:text-lg mt-4 font-rajdhani">{stat.label}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
