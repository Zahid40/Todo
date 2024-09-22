import React from "react";

function Footer() {
  return (
    <>
      <div className="flex  gap-1 justify-between items-center fixed left-0 bottom-0 h-12 w-full p-4 bg-gray-800 text-[var(--secondary)] text-xs">
        <span>
          Created by <a href="https://zahid.vercel.app" className="text-[var(--primary)] underline ">Zahid</a>
        </span>
        <span>A React App</span>
      </div>
    </>
  );
}

export default Footer;
