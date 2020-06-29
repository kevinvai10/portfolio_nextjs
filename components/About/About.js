import InfoCard from '../InfoCard/InfoCard';
import { skills } from '../../utils/constants/skills';
import BackendIcon from '../Icons/BackendIcon';

const About = () => (
    <section className="about">
        <div className="intro">
            <h1 className="intro__title">About Me</h1>
            <p className="intro__paragraph">
                lorem ipsum som text to fill in here for a while and make it seem like i m describing something super cool i don't even see but i can just keep texting this is crazy
            </p>
        </div>
        <div className="card-container">
            {
                skills && skills.map(skill => {
                    return <InfoCard key={skill.id} Icon={BackendIcon} {...skill} />
                })
            }
        </div>
    </section>
);

export default About;
