import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; 

const testimonials = [
  {
    name: "Tahmid Alom",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    feedback:
      "Best gym in town!This gym changed my life! The personal trainers really care about your progress, and the workout programs are intense but fun.",
    rating: 5
  },
  {
    name: "John Doe",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    feedback:
      "I’ve never felt more motivated,The environment is welcoming, and the facilities are always clean. Whether you’re a beginner or a pro, this gym has everything you need.",
    rating: 4.5
  },
  {
    name: "Alice Brown",
    position: "Manager",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    feedback:
      "Lost 15 pounds and gained confidence,I used to struggle with consistency, but the group classes here keep me accountable. Now, working out is something I look forward to every day!",
    rating: 4
  },
  {
    name: "David Smith",
    position: "Director",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    feedback:
      "Top-Notch Equipment & Trainers tried many gyms, but this one stands out! The equipment is always clean, and the trainers push you to be your best.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    position: "Developer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback:
      "From Beginner to Fitness Enthusiast I was intimidated at first, but the friendly staff made me feel at home. Now, fitness is a part of my lifestyle",
    rating: 4.5
  },
  {
    name: "James Lee",
    position: "Designer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    feedback:
      "The energy here is amazing! Whether you’re a beginner or an athlete, you’ll find the perfect environment to reach your goals.",
    rating: 4
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-6 md:p-10">
     
      <div className="w-full max-w-4/5 md:max-w-4xl flex flex-col sm:flex-row gap-6 overflow-hidden">
        {[0, 1].map((offset) => {
          const testimonial = testimonials[(index + offset) % testimonials.length];
          return (
            <motion.div
              key={testimonial.name}
              className="flex items-center sm:w-1/2  w-full space-x-4 bg-white p-4 rounded-lg "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-gray-300"
              />
              <div className="text-left">
                <h3 className="font-semibold text-xl text-[#0A192F] rajdhani-font">{testimonial.name} / {testimonial.position}</h3>
                <div className="flex items-center mt-1 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    i + 1 <= testimonial.rating ? (
                      <FaStar key={i} className="w-4 h-4" />
                    ) : testimonial.rating > i && testimonial.rating < i + 1 ? (
                      <FaStarHalfAlt key={i} className="w-4 h-4" />
                    ) : (
                      <FaStar key={i} className="w-4 h-4 text-gray-300" />
                    )
                  ))}
                </div>
                <div className="w-20 h-1 bg-orange-500 mt-2"></div>
                <p className="text-gray-600 font-roboto text-sm sm:text-base mt-2">{testimonial.feedback}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex gap-3 mt-6">
        {Array.from({ length: testimonials.length / 2 }).map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i * 2 === index ? "bg-orange-500 scale-110" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i * 2)}
          ></button>
        ))}
      </div>
    </div>
  );
}
