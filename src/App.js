import ToDoList from "./components/ToDoList.jsx";

export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return <ToDoList></ToDoList>;
}
