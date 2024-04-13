import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoSlice";

export function TaskInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleTodo(e) {
    e.preventDefault();
    dispatch(addTask(input));
    setInput("");
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border border-dark mt-5">
          <h3 className="bg-warning bg-gradient text-start text-semibold p-1">
            TO-DO APP
          </h3>
          <form action="" onSubmit={handleTodo}>
            <div className="input-group p-2">
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                className="form-control"
                type="text"
                placeholder="Your Task ✍️"
              />
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}
