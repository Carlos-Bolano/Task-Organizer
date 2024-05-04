import React from "react";

const Loader = () => {
  return (
    <section className="relative w-screen h-screen flex flex-col justify-center items-center">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <span className="text-xl mt-4 ">Recuperando información...</span>
    </section>
  );
};

export default Loader;
