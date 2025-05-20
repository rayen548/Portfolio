import React from 'react';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={`${title} screenshot`} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          {link ? (
            <a
              href={link}
              className="btn btn-primary mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          ) : (
            <button className="btn btn-secondary mt-auto" disabled>No Link</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
