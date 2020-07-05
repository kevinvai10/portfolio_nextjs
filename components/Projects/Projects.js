import {portfolio} from '../../utils/constants/portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => (
    <section className="projects">
        <h1 className="projects__title">
            Check out some of my projects
        </h1>
        <div className="projects__container">
            {
                portfolio.map(project => (
                    <ProjectCard key={project.id} {...project}/>
                ))
            }
        </div>
    </section>
);

export default Projects;