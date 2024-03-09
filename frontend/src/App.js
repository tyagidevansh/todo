import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleAPI";

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <div className="App">
      <div className = "container">
        <h1> ToDo List</h1>
        <div className = "top">
          <input 
            type = "text" 
            placeholder = "Add ToDo's"
            value = {text}
            onChange={(e) => setText(e.target.value)}
            />

          <div 
            className="add" 
            onClick={isUpdating ? 
            () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
            : ()=>addToDo(text, setText, setToDo)}>
            {isUpdating? "Update" : "Add"} 
          </div>
        </div>
        <div className="list">

          {toDo.map((item) => <ToDo 
          key = {item._id} 
          text = {item.text} 
          updateMode={() => {updateMode(item._id, item.text)}}
          deleteToDo = {() => deleteToDo(item._id, setToDo)}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;