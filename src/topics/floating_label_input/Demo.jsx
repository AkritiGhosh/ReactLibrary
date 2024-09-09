import React from "react";

const FLIDemo = () => {
  return (
    <section>
      <div className="w-full">
        <input
          type="text"
          className="w-full h-10 rounded-lg text-base px-2 bg-transparent border-2 border-teal-500"
          id="floating_label_input"
        />
        <label className="text-xs" htmlFor="floating_label_input">
          Enter value here
        </label>
      </div>
    </section>
  );
};

export default FLIDemo;
