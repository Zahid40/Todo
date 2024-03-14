import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      title: "jsx shikh lunga",
      description: "Decs 1",
    },
    {
      title: "Hi 2 jdfhdj fdgh",
      description: "Desc 2",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[600px] min-w-96 w-full h-full flex flex-col gap-8 justify-between">
          <Navbar />
          <div className="px-24 flex flex-col gap-8">
            <div className="w-full aspect-video  ">
              <div className="aspect-video w-full p-8 rounded-[3rem] border border-[var(--secondary)] flex justify-evenly">
                <div className="h-full aspect-square text-[var(--secondary)] flex flex-col justify-center ">
                  <h1 className="text-2xl font-bold">Todo Done</h1>
                  <p>Keep it up</p>
                </div>
                <div className="bg-[var(--primary)] h-full aspect-square rounded-full flex justify-center items-center">
                  <h1 className="font-bold text-3xl">1/3</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-stretch items-center gap-4">
              <input
              placeholder="write your next task"
                type="text"
                name="addNote"
                id="addNote"
                className="rounded-xl py-2 px-4 bg-gray-800 w-full placeholder:text-[var(--secondary)] placeholder:opacity-25 text-[var(--secondary)] border border-transparent focus:border focus:border-red-500"
              />
              <button className="flex items-center justify-center bg-[var(--primary)] aspect-square h-full rounded-full font-bold">
                <span className="material-symbols-outlined " >add</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {data.map((todo) => {
                return (
                  <Todo
                    key={todo.title}
                    title={todo.title}
                    description={todo.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </>
  );
}

export default App;
