import { useState } from "react";
import styled from "styled-components";
const AddButton = styled.button`
  padding: 14px 22px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #be185d, #db2777);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      return;
    }
    onAddTask(title.trim());
    setTitle("");
  };
  return (
    <form
      className="add-task row g-2 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="col-12 col-md-9">
        <input
          className="form-control"
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="col-12 col-md-3">
        <AddButton type="submit" className="w-100">
          Add Task
        </AddButton>
      </div>
    </form>
  );
}
export default AddTask;