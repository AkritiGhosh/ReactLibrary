import React from 'react'
import { Link } from 'react-router-dom';

const FeatureCard = ({feature}) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-app-300 shadow-[0_0_5px_0] flex flex-col gap-2.5">
      <h3 className="text-white font-semibold text-xl">{feature?.heading}</h3>
      {feature?.imgSrc && (
        <img
          src={"/src/assets/demoCuts/" + feature.imgSrc}
          alt={feature.heading + " working demo"}
          className="max-w-full w-auto h-auto rounded object-contain object-center"
        />
      )}
      {feature?.tags?.length > 0 ? (
        <div className="w-full flex flex-wrap gap-2">
          {feature?.tags?.map((tag) => (
            <span className="w-auto py-1 px-2 rounded border border-gray-700 text-sm font-normal text-focus-50 flex items-center gap-1">
              {tag?.icon ? (
                <img src={tag.icon} className="size-4 object-cover" />
              ) : null}
              {tag?.data ?? tag}
            </span>
          ))}
        </div>
      ) : null}
      {feature?.description && (
        <p className="w-full text-sm font-light text-app-50">
          {feature?.description}
        </p>
      )}
      <div className="w-full flex justify-end">
        <Link to={"/component/" + feature?.path}>
          <button
            type="button"
            className="w-auto py-1 px-3 rounded-xl border border-focus-50 text-sm font-semibold text-focus-50 flex items-center gap-2 hover:border-focus-600 group"
          >
            Open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.25}
              stroke="currentColor"
              className="size-4 group-hover:stroke-focus-500 group-hover:stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard