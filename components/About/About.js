import InfoCard from '../InfoCard/InfoCard';
import { skills } from '../../utils/constants/skills'

const About = () => (
    <section className="about">
        <h1>About Me</h1>
        <div className="intro">
            lorem ipsum som text to fill in here for a while and make it seem like i m describing something super cool i don't even see but i can just keep texting this is crazy
        </div>
        <div className="card-container">
            {
                skills && skills.map(skill => (
                    <InfoCard {...skill} />
                ))
            }
        </div>
    </section>
);

export default About;
