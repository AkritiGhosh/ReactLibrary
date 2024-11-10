import React from "react";

const FLIDemo = () => {
  return (
    <section>
      <div className="w-full relative">
        <input
          type="text"
          required
          className="w-[40vw] h-14 rounded-lg text-xl leading-[3.5rem] px-4 bg-transparent border-2 border-black focus:border-teal-500 !outline-0 peer"
          id="floating_label_input"
        />
        <label
          className="text-xl absolute left-4 top-2/4 -translate-y-1/2 pointer-events-none duration-300 
          peer-focus:text-xs peer-focus:top-0 peer-focus:px-1 peer-focus:bg-white 
          peer-valid:text-xs peer-valid:top-0 peer-valid:px-1 peer-valid:bg-white peer-valid:text-teal-500 peer-focus:text-teal-500"
          htmlFor="floating_label_input"
        >
          Enter value here
        </label>
      </div>
    </section>
  );
};

export default FLIDemo;
