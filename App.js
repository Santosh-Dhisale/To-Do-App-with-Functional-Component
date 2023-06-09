

// Todo with functional component:
import { useState } from "react";

export default function App() {
  const [item, updateItem] = useState(["Read"]);
  const [text, updateText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0 || !text) return;
    updateText("");
    updateItem([...item, text]);
  };
  const handleCancel = (index) => {
    const newTodos = [...item];
    newTodos.splice(index, 1);
    updateItem(newTodos);
  };
  return (
    <div>
      <h1>To Do Application </h1>
      <label>Add task? </label>
      <input
        type="text"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      <ol>
        {item.map((data, index) => (
          <li key={data.id}>
            {data}
            <button onClick={() => handleCancel(index)}>Cancel</button>
          </li>
        ))}
      </ol>
    </div>
  );
}






