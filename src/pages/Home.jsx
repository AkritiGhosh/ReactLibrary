import React, { useRef } from "react";
import HeroSection from "../component/homepage/HeroSection";
import FeatureSection from "../component/homepage/FeatureSection";

const Home = () => {
  const featureRef = useRef();
  return (
    <main className="relative w-screen h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory bg-app-200 scrollbar-none">
      <div className="w-full h-screen snap-always snap-start bg-black">
        <HeroSection scrollRef={featureRef} />
      </div>
      <div
        ref={featureRef}
        className="relative w-full h-screen snap-always snap-start bg-black overflow-y-auto"
      >
        <FeatureSection />
      </div>
    </main>
  );
};

export default Home;
