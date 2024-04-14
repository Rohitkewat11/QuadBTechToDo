import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../redux/todoSlice";
import { useState } from "react";
import "./taskList.css";

export function TaskList() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todos);
  const [active, setActive] = useState(true);

  // function for show task completed or not//
  function handleTaskTest(e){
    console.log(e);
    // console.log(ID);
    setActive(active=>!active);
    console.log(active);
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-25 mt-5">
          {taskList.map((item) => (
            <li
              key={item.id}
              className="d-flex justify-content-between p-2 bg-black bg-gradient mt-1"
            >
              <p
                className={active === true ? "" : "checked"}
                style={{ color: "white" }}
                // style={{cursor:"pointer",textDecoration:active===false?"line-through":"none"}}
                onClick={handleTaskTest}
              >
                {item.task}
              </p>
              <span
                onClick={() => {
                  dispatch(removeTask(item.id));
                }}
                className="text-danger bi bi-trash btn"
                title="remove"
              ></span>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
