import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './index.css';

const Data = [
  { id: 1, title: 'My Portfolio', description: 'I was tasked with creating a personal portfolio website using HTML and CSS.' },
  { id: 2, title: 'Project', description: 'A small project to showcase a simple. everyday words and easy questions.' },
  { id: 3, title: 'Color Clock', description: 'Creating an application that displays the current date and time in a human readable format.' },
];

function App() {
  const [projects, setProjects] = useState(Data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shell">
      <Header />

      <main className="container">
        <Form onAddProject={handleAddProject} />

        <div className="display-box">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </div>
      </main>
    </div>
  );
}

export default App;