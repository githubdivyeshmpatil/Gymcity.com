import React from "react";

function Text(props) {
  // Title ke first word ko alag extract karna
  const words = props.title.split(" ");
  const firstWord = words.shift(); // Pehla word nikalna
  const remainingText = words.join(" "); // Baaki ka text wapas join karna

  return (
    <div className="flex justify-center items-center text-center">
      <div>
        <h2 className="text-[30px] font-rajdhani sm:text-[32px] md:text-[50px] font-bold text-[#000000] mb-4">
          <span className="text-[#FF6201]">{firstWord}</span> {remainingText}
        </h2>
        <h2 className="text-[30px] font-rajdhani sm:text-[32px] md:text-[50px] font-bold text-[#000000] mb-4">
          {props.semititle}
        </h2>
      </div>
    </div>
  );
}

export default Text;
