import { useEffect, useState } from "react";
import './Project.scss';

function getUserRepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(response => {
            return response;
        })
}


function redirect(url) {
    if (url) {
        window.open(url, '_blank');
    }

}

export function Projects() {

    const [repos, setRepo] = useState([]);
    const [showRepo, setShowRepo] = useState(false);

    useEffect(async () => {
        let getRepositories = await getUserRepo('sakshikapoor');
        const repositoryCollection = [];
        getRepositories.forEach(repository => {
            repositoryCollection.push({
                id: repository.id,
                name: repository.name,
                description: repository.description,
                git_url: repository.html_url,
                created_at: new Date(repository.created_at)
            });
        });
        const reposToDisplay = repositoryCollection.sort(function (a, b) {
            return (a.created_at - b.created_at);
        }).reverse();

        setRepo(reposToDisplay);
        setShowRepo(true);
    }, []);

    const noRepoContainer = <div>No repo to display</div>

    const repoContainers = repos.map((repository =>
        <div className="project-wrapper" key={repository.id}>
            <div className="heading">{repository.name}</div>
            <div className="description">{repository.description}</div>
            <button className="url" onClick={() => redirect(repository.git_url)}>View Code</button>
        </div>

    ));

    const projectSection = showRepo ? repoContainers : noRepoContainer;

    return (
        <div className="main-project-wrapper" id="projects">
            <h1 className="my-project-heading" onClick={() => redirect('https://github.com/sakshikapoor')}>My Projects</h1>
            <div className="projects-container">
                {projectSection}
            </div>
        </div>

    )
}