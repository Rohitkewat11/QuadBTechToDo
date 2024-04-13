// import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../redux/todoSlice";

export function TaskList() {

  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todos);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-50 mt-5">
          {taskList.map((item) => (
            <li
              key={item.id}
              className="d-flex justify-content-between p-2 bg-black bg-gradient mt-1"
            >
              <p className="text-danger">{item.task}</p>
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
