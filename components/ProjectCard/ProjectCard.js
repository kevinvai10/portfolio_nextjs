const ProjectCard = ({ name, description, imgurl, url }) => (
    <div className="project-card">
        <img src={imgurl} alt={`project-${name}`} style={{width: '100%', height: 'auto' }}/>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
);

export default ProjectCard;