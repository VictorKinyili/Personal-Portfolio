import React, { useState } from 'react';

function Form({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newProject = {
      id: Date.now(),
      title,
      description
    };

    onAddProject(newProject);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Add Project</h2>

      <div className="field">
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
      </div>

      <button type="submit" className="btn">Add</button>
    </form>
  );
}

export default Form;