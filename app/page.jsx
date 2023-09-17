'use client'

import Feed from "@app/components/Feed";
import React from "react";

const Home = () => {
  // Define the handleClick function
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient tet-center">AI-Powered Propmpts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for the modern world to
        discover, create, and share creative prompts
      </p>

      <button type="button" onClick={handleClick}>
        Click me
      </button>

      <Feed />
    </section>
  );
};

export default Home;
