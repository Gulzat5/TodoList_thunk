import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoPost } from "../store/todo/TodoThunk";
import { actionTypeTodo } from "../store/todo/todoReducer";

export const TodoForm = () => {
  const { selectValue } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: value,
      completed: false,
    };

    dispatch(todoPost(data));

    setValue("");
  };

  const selectChangeHandler = (event) => {
    dispatch({
      type: actionTypeTodo.SELECT_VALUE,
      payload: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>

      <select value={selectValue} onChange={selectChangeHandler}>
        <option value="все">все</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
    </div>
  );
};
