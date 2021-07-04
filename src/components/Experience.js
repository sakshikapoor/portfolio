import './Experience.scss';

function redirect(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

export function Experience() {
    return (
        <div className="main-experience-wrapper" id="experience">
            <h1 className="my-experience-heading" onClick={() => redirect('https://www.linkedin.com/in/sakshire')}>My Work Experience</h1>
            <div className="experience-wrapper">
                <div className="center">
                    <div>&#8226;</div>
                    <div className="center line-container">
                        <div className="line">
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <h2>Frontend Developer - SDE</h2>
                    <h3>Box8 (Poncho Hospitality Ltd.)</h3><h4>Bangalore</h4>
                    <div className="timeline">Sep 2019 - Present</div>
                </div>
                <div className="details">
                    <ul>
                        <li>Lead the frontend payment team integrating 15+ payment methods via direct integrations.</li>
                        <li>Implemented all UI components for the payments section, brand landing page and customisation screens.</li>
                        <li>Implemented Responsive Web Design on all five websites for a seamless mobile(web & in-app) and desktop view — properties accounting for >70% of all orders.</li>
                        <li>Worked with Google Tag Manager and Google Analytics to track bounce rate and payment.</li>
                        <li>Started E2E testing with Cypress in the project</li>
                        <li>Revamped Landing page and payment page</li>
                    </ul>
                </div>


                <div className="center">
                    <div>&#8226;</div>
                    <div className="center line-container">
                        <div className="line">
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <h2>Associate System Developer</h2>
                    <h3>IBM</h3>
                    <h4>Pune</h4>
                    <div className="timeline">Feb 2018 - Aug 2019</div>
                </div>
                <div className="details">
                    <ul>
                        <li>Responsible for report generation from different fleet applications during account migration.</li>
                        <li>Monitoring the applications in case of job failures while oncall support.</li>
                        <li>Worked on an Angular website for our client to increase traceability of fleet and customer transactions.</li>
                        <li>Was awarded with Eminence & Excellence Best Graduate Hire Award 2018.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}