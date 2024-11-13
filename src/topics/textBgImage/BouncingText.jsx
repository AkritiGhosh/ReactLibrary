import React from "react";

const BouncingCharacters = () => {
  const char = ["L", "O", "A", "D", "I", "N", "G"];
  return (
    // <div className="w-full h-full relative">
    char?.map((c, x) => (
      <span
        style={{ animationDelay: (x * 2) / 10 + "s" }}
        className={`inline-block text-9xl font-black tracking-widest text-black dark:text-white relative animate-bounceChar `}
      >
        {c}
      </span>
    ))
    // </div>
  );
};

export default BouncingCharacters;
