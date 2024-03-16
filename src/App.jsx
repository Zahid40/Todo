import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

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

  const handleAdd = async () => {
    setTdata([...tdata, { id: uuidv4(), todo, iscompleted: false }])
    setTodo("");
    console.log(tdata);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handledelete = (e , id) => {
    let newTdata = tdata.filter(item=>{
      return item.id!=id;
    });
    setTdata(newTdata);
  };


  const hangeCheckbox = (e) => {
    let id = e.target.name;
    let index = tdata.findIndex(item=>{
      return item.id === id;
    });
    let newTdata = [...tdata];
    newTdata[index].iscompleted = !newTdata[index].iscompleted;
    setTdata(newTdata);
  };

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
                  <h1 className="font-bold text-3xl"></h1>
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
                  <div key={val.id} className="flex justify-between items-center border border-[var(--secondary)] py-2 px-4 rounded-xl">
                    <div className="flex justify-center items-center gap-4">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center p-3 rounded-full cursor-pointer"
                          htmlFor="green"
                        >
                          <input
                            onChange={hangeCheckbox}
                            name={val.id}
                            type="checkbox"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                            id="green"
                          />
                          <span className="absolute text-green-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                      </div>

                      <h2
                        className={`text-[var(--secondary)] font-semibold text-lg ${
                          val.iscompleted ? "line-through" : ""
                        }`}
                      >
                        {val.todo}
                      </h2>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <button className="flex justify-center items-center">
                        <span className="material-symbols-outlined text-[var(--secondary)]">
                          edit_square
                        </span>
                      </button>
                      <button
                        className="flex justify-center items-center"
                        onClick={(e)=>{handledelete(e , val.id)}}
                      >
                        <span className="material-symbols-outlined text-[var(--secondary)]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
