import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  useEffect(() => {
    // Check if the browser supports notifications
    if ("Notification" in window && "serviceWorker" in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
  }, []);

  const [todo, setTodo] = useState("");
  const [tdata, setTdata] = useState([]);

  useEffect(() => {
    // Load the data from localStorage only on the first render
    let todoString = localStorage.getItem("tdata");
    if (todoString) {
      let loadedTdata = JSON.parse(todoString);
      setTdata(loadedTdata);
    }
  }, []);

  // Save to localStorage whenever tdata changes
  useEffect(() => {
    if (tdata.length > 0) {
      localStorage.setItem("tdata", JSON.stringify(tdata));
    } else {
      localStorage.removeItem("tdata");
    }
  }, [tdata]);

  const taskcount = () => {
    let totaltask = tdata.length;
    let taskdone = tdata.filter((item) => item.iscompleted === true).length;
    return `${taskdone}/${totaltask}`;
  };

  useEffect(() => {
    const notifyUser = () => {
      const incompletetodo = tdata.filter((item) => item.iscompleted === false); // Incomplete tasks
      if (Notification.permission === "granted" && incompletetodo.length > 0) {
        navigator.serviceWorker.ready.then((registration) => {
          // Create a list of task descriptions
          const taskList = incompletetodo.map((e) => e.todo).join(", "); // Joining tasks into a single string

          registration.showNotification(
            `${incompletetodo.length} Task(s) Left!`,
            {
              body:
                incompletetodo.length > 0 ? taskList : "No incomplete tasks.",
              icon: "/assets/android-chrome-192x192.png", // Path to your app icon
            }
          );
        });
      }
    };

    // You can trigger the notification at certain intervals
    const intervalId = setInterval(notifyUser, 3600000); // Notify every hour

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [tdata]); // Dependency array with tdata

  const handleAdd = () => {
    setTdata([...tdata, { id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    let newTdata = tdata.filter((item) => item.id !== id);
    setTdata(newTdata);
  };

  const handleEdit = (id) => {
    let t = tdata.find((i) => i.id === id);
    setTodo(t.todo);
    let newTdata = tdata.filter((item) => item.id !== id);
    setTdata(newTdata);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let newTdata = tdata.map((item) => {
      if (item.id === id) {
        item.iscompleted = !item.iscompleted;
      }
      return item;
    });
    setTdata(newTdata);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[600px] min-w-96 w-full h-full flex flex-col gap-8 justify-between">
          <Navbar />
          <div className="px-8 flex flex-col gap-8">
            <div className="w-full aspect-video  ">
              <div className="aspect-video w-full p-8 rounded-[3rem] border border-[var(--secondary)] flex justify-evenly">
                <div className="h-full aspect-square text-[var(--secondary)] flex flex-col justify-center ">
                  <h1 className="text-2xl font-bold">Todo Done</h1>
                  <p>Keep it up</p>
                </div>
                <div className="bg-[var(--primary)] h-full aspect-square rounded-full flex justify-center items-center">
                  <h1 className="font-bold text-3xl">{taskcount()}</h1>
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
                disabled={todo.length < 3}
                onClick={handleAdd}
                className="flex items-center justify-center bg-[var(--primary)]  h-full aspect-square rounded-full font-bold p-2 disabled:bg-gray-400"
              >
                <span className="material-symbols-outlined ">add</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {tdata.map((val) => (
                <div
                  key={val.id}
                  className={`flex justify-between items-center border  py-2 px-4 rounded-xl ${
                    val.iscompleted
                      ? "border-[var(--secondary)] bg-mgreen-900"
                      : "border-[var(--secondary)]"
                  }`}
                >
                  <div className="flex justify-center items-center gap-4">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor={val.id}
                      >
                        <input
                          onChange={handleCheckbox}
                          name={val.id}
                          type="checkbox"
                          checked={val.iscompleted}
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[var(--primary)] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[var(--green)] checked:before:bg-[var(--primary)] hover:before:opacity-10"
                          id={val.id}
                        />
                        <span className="absolute text-[var(--green)] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
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
                      className={` font-medium text-base ${
                        val.iscompleted
                          ? "line-through text-[var(--secondary)]"
                          : "text-[var(--secondary)]"
                      }`}
                    >
                      {val.todo}
                    </h2>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      onClick={() => handleEdit(val.id)}
                      className="flex justify-center items-center"
                    >
                      <span className="material-symbols-outlined text-[var(--secondary)]">
                        edit_square
                      </span>
                    </button>
                    <button
                      className="flex justify-center items-center"
                      onClick={() => handleDelete(val.id)}
                    >
                      <span className="material-symbols-outlined text-[var(--secondary)]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
