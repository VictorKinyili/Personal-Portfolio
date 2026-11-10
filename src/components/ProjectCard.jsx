function ProjectCard({ project }) {
  const titleInitial = project.title.charAt(0).toUpperCase();

  return (
    <div className="item-row">
      <div className="placeholder-box" aria-hidden="true">
        {titleInitial}
      </div>
      
      <div className="item-text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;