import Particles from 'react-particles-js';
import ParticlesSettings from '../../utils/constants/particles';

const Header = () => (
    <header className="header">
        <Particles className="particles" params={ParticlesSettings} />
        <div className="content">
            Hello I'm Kevin <br />
            I'm a full-stack engineer.
        </div>
    </header>
);

export default Header;