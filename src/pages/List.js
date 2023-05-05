import '../App.css'
import { useState } from 'react'
import { addTodo, addDoneTodo, deleteActiveTodo, deleteDoneTodo } from '../utils/index.js'

function List() {
const [activeTodos, setActiveTodos] = useState([]);
const [doneTodos, setDoneTodos] = useState([]);

const handleAddTodo = async (e) => {
  e.preventDefault();
  const todo = e.target.elements.todo.value;
  const result = await addTodo(todo);
  if (result.message === 'success') {
    setActiveTodos([...activeTodos, result.todo.todo]);
  }
};

const handleDoneTodo = async (e, index) => {
  e.preventDefault()
  const doneTodo = activeTodos[index];
  await addDoneTodo(doneTodo);
  setActiveTodos(activeTodos.filter((_, i) => i !== index));
  setDoneTodos([...doneTodos, doneTodo]);
};

const handleUndoTodo = async (e, index) => {
    e.preventDefault()
  const undoneTodo = doneTodos[index];
  setDoneTodos(doneTodos.filter((_, i) => i !== index));
  setActiveTodos([...activeTodos, undoneTodo]);
};

const handleDeleteTodo = async (list, index) => {
  if (list === 'active') {
    const deletedTodo = activeTodos[index];
    setActiveTodos(activeTodos.filter((_, i) => i !== index));
    await deleteActiveTodo(deletedTodo);
  } else if (list === 'completed') {
    const deletedTodo = doneTodos[index];
    setDoneTodos(doneTodos.filter((_, i) => i !== index));
    await deleteDoneTodo(deletedTodo);
  }
};

return (
  <div>
    <h2>Active Todos</h2>
    <ul>
      {activeTodos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={(e) => handleDoneTodo(e, index)}>Complete</button>
          <button onClick={() => handleDeleteTodo('active', index)}>Delete</button>
        </li>
      ))}
    </ul>
    <h2>Done Todos</h2>
    <ul>
      {doneTodos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={(e) => handleUndoTodo(e, index)}>Undo</button>
          <button onClick={() => handleDeleteTodo('completed', index)}>Delete</button>
        </li>
      ))}
    </ul>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(e);
        e.target.reset();
      }}
    >
      <input type="text" name="todo" placeholder="Add todo" />
      <button type="submit">Add</button>
    </form>
  </div>
  );
}

export default List