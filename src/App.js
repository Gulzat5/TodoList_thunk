import { useEffect } from "react";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { getTodo } from "./store/todo/TodoThunk";
import { store } from "./store";

function AppContent() {
  const { selectValue } = useSelector((state) => state.todo);
  console.log("selectVlue", selectValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch, selectValue]);

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;
