import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-1 justify-center items-center fixed left-0 bottom-0 h-16 w-full p-4 bg-gray-800 text-[var(--secondary)] text-xs">
        <span>
          Created by <a href="https://zahid40.github.io/" className="text-[var(--primary)] underline ">Zahid</a>
        </span>
        <span>A React App</span>
      </div>
    </>
  );
}

export default Footer;
