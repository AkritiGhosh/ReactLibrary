import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-screen h-screen flex flex-col gap-10 items-center justify-center">
      <h1 className="font-serif text-4xl">React library</h1>
      <Link to={"/main"}>
        <button className="bg-black rounded-3xl h-10 py-2 px-4 text-white ">
          Start here
        </button>
      </Link>
    </main>
  );
};

export default Home;
