import animationData from '../assets/witch.json';
import Lottie from 'react-lottie';
import './AboutMe.scss';

export function AboutMe() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="aboutme-wrapper" id="about">
            <div className="left-container">
                <h1 className="main-heading">Hi, I'm Sakshi</h1>
                <p className="description">
                    I'm a web developer with 3+ years of experience.
                    I make websites with a touch of <span>magic</span>!
                </p>
            </div>
            <div >
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </div>
    )
}