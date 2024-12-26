import React from "react";
import features from "../../lib/featureList.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <>
      <h1
        style={{
          textShadow:
            "teal 1px 1px 1px, teal -1px -1px 1px, teal 1px -1px 1px, teal -1px 1px 1px, teal 0px 0px 12px",
        }}
        className=" underline underline-offset-[24px] text-focus-600 decoration-focus-600 decoration-2 text-7xl leading-relaxed font-light text-center pt-5"
      >
        Component list
      </h1>
      <div className="mt-8 px-5 md:px-[5%] container m-auto">
        {features?.map((featureGroup) => (
          <div className="w-full mb-12 relative">
            <h2 className="text-white my-2 font-mono text-xl uppercase ">
              {featureGroup?.heading}
            </h2>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 300: 1, 500: 2, 800: 3, 1300: 4 }}
            >
              <Masonry gutter="20px">
                {featureGroup?.content?.map((feature) => (
                  <FeatureCard key={feature?.path} feature={feature} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureSection;
