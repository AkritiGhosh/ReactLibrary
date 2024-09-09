import React from "react";

const FLIDemo = () => {
  return (
    <section>
      <div className="w-full relative">
        <input
          type="text"
          className="w-full h-10 rounded-lg text-base px-2 bg-transparent border-2 border-black"
          id="floating_label_input"
        />
        <label className="text-base absolute left-2 top-2/4 -translate-y-1/2 pointer-events-none duration-300" htmlFor="floating_label_input">
          Enter value here
        </label>
      </div>
    </section>
  );
};

export default FLIDemo;
