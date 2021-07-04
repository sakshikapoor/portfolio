import './Showcase.scss';
import notes from '../assets/notes.jpg';
import flowchart from '../assets/flowchart.jpg';
import minesweeper from '../assets/minesweeper.jpg';
import angular_icon from '../assets/angular_icon.svg';
import react_icon from '../assets/react_icon.svg';

const liveProjects = [
    {
        id: 1,
        name: 'Notes App',
        framework: 'react',
        url: 'https://tree-flowchart.herokuapp.com/',
        img: notes
    },
    {
        id: 2,
        name: 'Flow Chart Maker',
        framework: 'react',
        url: 'https://tree-flowchart.herokuapp.com/',
        img: flowchart
    },
    {
        id: 3,
        name: 'Minesweeper Game',
        framework: 'angular',
        url: 'https://sakshire-minesweeper.herokuapp.com/',
        img: minesweeper
    }
]

function redirect(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

function getSrc(framework) {
    return framework === 'react' ? react_icon : angular_icon;
}

export function Showcase() {

    const projects = liveProjects.map(project =>
        <div className="project" key={project.id}>
            <img src={project.img} alt={project.name} onClick={() => redirect(project.url)} className="project-image" />
            <div className="project-name">{project.name}</div>
            <img className="framework" src={getSrc(project.framework)} alt={project.framework} />
        </div>
    )

    return (
        <div className="showcase-wrapper" id="liveprojects">
            <h1 className="my-showcase-heading">Showcase of Live Projects</h1>
            <div className="live-project-wrapper">
                {projects}
            </div>
        </div>
    )
}