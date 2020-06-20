import Particles from 'react-particles-js';
import ParticlesSettings from '../../utils/constants/particles';
import { IconButton } from '@material-ui/core';
import { LinkedIn as LinkedInIcon,  GitHub as GithubIcon} from '@material-ui/icons';
import { linkedInUrl, githubUrl } from '../../utils/constants/urls';

const Header = () => (
    <header className="header">
        <Particles className="particles" params={ParticlesSettings} />
        <div className="content">
            <h2>
                Hello I'm Kevin <br />
                I'm a full-stack engineer.
            </h2>
            <hr />
            <div className="content__icons">
            <IconButton
                color="inherit"
                aria-label="Linkedin.com"
                href={linkedInUrl}
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                color="inherit"
                aria-label="Github.com"
                href={githubUrl}
            >
                <GithubIcon />
            </IconButton>
            </div>
        </div>
    </header>
);

export default Header;