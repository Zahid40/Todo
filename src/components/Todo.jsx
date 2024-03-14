import React from "react";

function Todo(props) {
  return (
    <>
      <div className="flex justify-between items-center border border-[var(--secondary)] py-2 px-4 rounded-xl">
        <div className="flex justify-center items-center gap-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="green"
            >
              <input
                name="color"
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
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>

          <h2 className="text-[var(--secondary)] font-semibold text-lg">{props.title}</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="flex justify-center items-center">
            <span className="material-symbols-outlined text-[var(--secondary)]">
              edit_square
            </span>
          </button>
          <button className="flex justify-center items-center">
            <span className="material-symbols-outlined text-[var(--secondary)]">delete</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
