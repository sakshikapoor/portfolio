import './ContactMe.scss';
import github_logo from '../assets/github_logo.svg';
import behance_logo from '../assets/behance_logo.svg';
import linkedin_logo from '../assets/linkedin_logo.svg';
import resume_filepath from '../assets/resume.pdf';

function redirect(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

export function ContactMe() {
    return (
        <div className="footer-container" id="contactme">
            <h1 className="my-footer-heading">Contact Me</h1>
            <div className="contact-info">
                <div>sakshi.kapoor97@gmail.com</div>
                <div>Mobile: (+91)8552885011 / (+91)8459489385</div>
                <a href={resume_filepath} className="resume" download="Sakshi_resume_2021">Download Resume</a>
                <div>
                    <img className="links" src={github_logo} alt="Github" onClick={() => redirect('https://github.com/sakshikapoor')} />
                    <img className="links" src={linkedin_logo} alt="LinkedIn" onClick={() => redirect('https://www.linkedin.com/in/sakshire')} />
                    <img className="links" src={behance_logo} alt="Behance" onClick={() => redirect('https://www.behance.net/sakshire')} />
                </div>
            </div>
        </div>
    )
}