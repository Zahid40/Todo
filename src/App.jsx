import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[600px] min-w-96 w-full">
          <Navbar />
          <div className="w-full aspect-video  p-24">
            <div className="aspect-video w-full p-8 rounded-2xl border border-[var(--secondary)] "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
