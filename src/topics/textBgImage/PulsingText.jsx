import React from "react";

const PulsingText = () => {
  const char = ["L", "O", "A", "D", "I", "N", "G"];
  return (
    char?.map((c, x) => (
      <span
        style={{ animationDelay: (x * 2.5) / 10 + "s" }}
        className={`inline-block text-9xl font-black tracking-widest text-black dark:text-white relative animate-charPulse `}
      >
        {c}
      </span>
    ))
  );
};

export default PulsingText;
