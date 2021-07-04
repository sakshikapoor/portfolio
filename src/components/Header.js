import './Header.scss'

export function Header() {
    return (
        <div className="navbar">
            <a href="#about" className="tab">About Me</a>
            <a href="#experience" className="tab">My Experience</a>
            <a href="#projects" className="tab">My Projects</a>
            <a href="#liveprojects" className="tab">Live Projects</a>
            <a href="#contactme" className="tab">Contact Me</a>
        </div>
    );
}