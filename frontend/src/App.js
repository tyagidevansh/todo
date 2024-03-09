import ToDo from "./ToDo";

function App() {
  return (
    <div className="App">
      <div className = "container">
        <h1> ToDo App</h1>
        <div className = "top">
          <input type = "text" placeholder = "Add ToDo's"/>
          <div className="add"> Add </div>
        </div>
        <div className="list">

          <ToDo text = "hi" />
          <ToDo text = "hi" />
          <ToDo text = "hi" />
          
        </div>
      </div>
    </div>
  );
}

export default App;
