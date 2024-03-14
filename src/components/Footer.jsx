import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center fixed left-0 bottom-0 h-20 w-full p-4 bg-gray-800 text-[var(--secondary)] text-xs">
        <span>
          Created by <a href="https://zahid40.github.io/" className="text-[var(--primary)] underline ">Zahid</a>
        </span>
        <span>Designed by <a href="https://dribbble.com/shots/22604632-Todo-Website-Todo-App?utm_source=Clipboard_Shot&utm_campaign=mbiburhan6&utm_content=Todo%20Website%20%2C%20Todo%20App&utm_medium=Social_Share" className="text-[var(--primary)] underline ">Burhanul Islam</a></span>
      </div>
    </>
  );
}

export default Footer;
