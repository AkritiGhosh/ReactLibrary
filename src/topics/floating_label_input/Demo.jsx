import React from "react";

const FLIDemo = () => {
  return (
    <section>
      <div className="w-full relative">
        <input
          type="text"
          required
          className="w-full h-10 rounded-lg text-base px-2 bg-transparent border-2 border-black focus:border-teal-500 !outline-0 peer"
          id="floating_label_input"
        />
        <label
          className="text-base absolute left-2 top-2/4 -translate-y-1/2 pointer-events-none duration-300 
          peer-focus:text-xs peer-focus:top-0 peer-focus:px-1 peer-focus:bg-white 
          peer-valid:text-xs peer-valid:top-0 peer-valid:px-1 peer-valid:bg-white"
          htmlFor="floating_label_input"
        >
          Enter value here
        </label>
      </div>
    </section>
  );
};

export default FLIDemo;
