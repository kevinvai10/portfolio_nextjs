import { useState } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {skills} from '../../utils/constants/skills';
import BackendIcon from '../Icons/BackendIcon';
import FrontendIcon from '../Icons/FrontendIcon';
import OtherSkillsIcon from '../Icons/OtherSkillsIcon';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { experience } from '../../utils/constants/experience';

const iconsMap = {
    'Front End': FrontendIcon,
    'Back End': BackendIcon,
    'Other Skills': OtherSkillsIcon
}

const About = () => {
    const [selectedJob, setSelectedJob] = useState(experience[0]);

    return (
        <section className="about">
            <div className="about__intro">
                <h1 className="about__intro__title">About Me</h1>
                <p className="about__intro__paragraph">
                    lorem ipsum som text to fill in here for a while and make it seem like i m
                    describing something super cool i don't even see but i can just keep texting
                    this is crazy
                </p>
            </div>
            <div className="about__card-container">
                {skills && skills.map(skill => {
                    return <InfoCard key={skill.id} Icon={iconsMap[skill.title]} {...skill}/>
                })
                }
            </div>
            <div className="about__work-experience">
                <h1>Where i've worked</h1>
                <div className="about__work-experience__container">
                    <div className="about__work-experience__timeline">
                        <Timeline>
                            {
                                experience.map(company =>                             
                                    (<div key={company.id}>
                                            <TimelineItem onClick={() => setSelectedJob(experience[Number(company.id) - 1])}>
                                                <TimelineSeparator>
                                                    <TimelineDot/>
                                                    <TimelineConnector/>
                                                </TimelineSeparator>
                                                <TimelineContent>{company.company}</TimelineContent>
                                            </TimelineItem>
                                    </div>)
                                )
                            }
                        </Timeline>
                    </div>

                    <div className="about__work-info">
                        <h3>{`${selectedJob.role} @${selectedJob.company}`}</h3>
                        <em>{`${selectedJob.from} - ${selectedJob.to}`}</em>
                        {
                            <ul>
                                {
                                    [selectedJob.highlights].map(highlight => (
                                        <li>{highlight}</li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
