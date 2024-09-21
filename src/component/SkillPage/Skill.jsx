import { useEffect } from 'react';
import './Skill.css';

function ExperiencePage() {
    useEffect(() => {
        const skills = document.querySelectorAll('.skill-circle');

        skills.forEach(skill => {
            const circle = skill.querySelector('.progress');
            const percentage = skill.querySelector('.skill-percentage span').textContent.replace('%', '');
            const dashoffset = 283 - (283 * percentage) / 100;

            circle.style.strokeDashoffset = dashoffset;
        });
    }, []); // Memastikan dijalankan setelah komponen di-mount

    return (
        <>
           <div className="skill">
              <div className="container">
                <div className="skill-text">
                    <h1>My Skill</h1>
                </div>

                <div className="skill-desc">
                    <p>I am a dedicated front-end developer with strong expertise in crafting responsive, user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like React, focusing on creating clean, efficient code to deliver seamless user experiences.</p>
                </div>

                <div className="skill-sec">
                <div className="skill-container">
                    <div className="skill-circle">
                        <svg className="circle">
                            <circle cx="50%" cy="50%" r="30%"></circle>
                            <circle className="progress" cx="50%" cy="50%" r="30%"></circle>
                        </svg>
                        <div className="skill-percentage">
                            <span>100%</span>
                        </div>
                    </div>
                    <h3>HTML</h3>
                </div>

                <div className="skill-container">
                    <div className="skill-circle">
                        <svg className="circle">
                            <circle cx="50%" cy="50%" r="30%"></circle>
                            <circle className="progress" cx="50%" cy="50%" r="30%"></circle>
                        </svg>
                        <div className="skill-percentage">
                            <span>80%</span>
                        </div>
                    </div>
                    <h3>CSS</h3>
                </div>

                <div className="skill-container">
                    <div className="skill-circle">
                        <svg className="circle">
                            <circle cx="50%" cy="50%" r="30%"></circle>
                            <circle className="progress" cx="50%" cy="50%" r="30%"></circle>
                        </svg>
                        <div className="skill-percentage">
                            <span>50%</span>
                        </div>
                    </div>
                    <h3>JavaScript</h3>
                </div>
            </div>
              </div>
           </div>
        </>
    );
}

export default ExperiencePage;
