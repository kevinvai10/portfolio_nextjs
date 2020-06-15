import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        line_linked: {
            shadow: {
                enable: false,
                color: "#3CA9D1",
                blur: 5,
                value_area: 800
            }
        }
    }
};

const Header = () => (
    <header className="header">
        <Particles className="header__particles" params={particlesOptions} />
        {/*<nav className="header__navbar">
            <a className="header__navbar__element">home</a>
            <a className="header__navbar__element">about</a>
            <a className="header__navbar__element">resume</a>
            <a className="header__navbar__element">projects</a>
            <a className="header__navbar__element">contact</a>
</nav>*/}
        <div className="header__content">
            Hello I'm Kevin {'\n'}
            I'm a full-stack engineer.
        </div>
    </header>
);

export default Header;