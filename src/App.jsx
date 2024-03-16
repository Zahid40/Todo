import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [tdata, setTdata] = useState([]);

  const data = [
    {
      title: "jsx dffdd fddfdf",
      description: "Decs 1",
    },
    {
      title: "Hi 2 fdfdf fdgh",
      description: "Descddfd ff 2",
    },
  ];

  const handleAdd = () => {
    setTdata([...tdata , { todo , iscompleted : false}])
    setTodo("")
    console.log(tdata);
  };

  const handleChange = (e)=>{
    setTodo(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[600px] min-w-96 w-full h-full flex flex-col gap-8 justify-between">
          <Navbar />
          <div className="px-16 flex flex-col gap-8">
            <div className="w-full aspect-video  ">
              <div className="aspect-video w-full p-8 rounded-[3rem] border border-[var(--secondary)] flex justify-evenly">
                <div className="h-full aspect-square text-[var(--secondary)] flex flex-col justify-center ">
                  <h1 className="text-2xl font-bold">Todo Done</h1>
                  <p>Keep it up</p>
                </div>
                <div className="bg-[var(--primary)] h-full aspect-square rounded-full flex justify-center items-center">
                  <h1 className="font-bold text-3xl">2/3</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-stretch items-center gap-2">
              <input
                placeholder="write your next task"
                type="text"
                name="addNote"
                id="addNote"
                className="rounded-xl py-2 px-4 bg-gray-800 w-full placeholder:text-[var(--secondary)] placeholder:opacity-25 text-[var(--secondary)] border border-transparent focus:border focus:border-red-500"
                onChange={handleChange}
                value={todo}
              />
              <button
                onClick={handleAdd}
                className="flex items-center justify-center bg-[var(--primary)]  h-full aspect-square rounded-full font-bold p-2"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {tdata.map((val) => {
                return (
                  <Todo
                    key={val.todo}
                    title={val.todo}
                    iscompleted={val.iscompleted}
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
