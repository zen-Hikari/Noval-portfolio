import './Experience.css'
import Html from './assets/html.png'
import Git from './assets/git.png'
import Css from './assets/css.png'
import Js from './assets/js.png'
import Nginx from './assets/nginx.png'
import React from './assets/react.png'
import Tailwind from './assets/tailwind.png'
import BugHunter from './assets/bug-hunter.png'
import Game from './assets/unity.png'
 
function Experience() {

    return (
        <>
        <div id='experience' className="experience">
           <div className="container">
            <div className="overlay3"></div>
            <div className="overlay4"></div>
            <h3 className="experience-title">EXPERIENCE</h3>
              <div className="experience-compt">
              <div className="experience-img">
                 <img className="html-css" src={Html} alt="Html" />
                 <img className="html-css" src={Css} alt="Html" />
                 <img src={Js} alt="Html" />
                 <img src={React} alt="Html" />
                 <img src={Git} alt="Html" />
                 <img className="nginx" src={Nginx} alt="Html" />
                 <img className="tailwind" src={Tailwind} alt="Html" />
              </div>

              <div className="experience-more">
                 <div className="bug-card">
                    <div className="img-bug">
                       <img src={BugHunter} alt="Bug Hunter" />
                    </div>
                    <div className="bug-title">
                       <h3>Bug Hunter</h3>
                       <p className="bug-p">what I know is that I also know the science of bug hunting, this bug hunter is my first skill rather than the second skill</p>
                    </div>
                 </div>

                 <div className="game-card">
                    <div className="game-img">
                        <img src={Game} alt="" />
                    </div>
                    <div className="game-title">
                    <h3>Game Developer</h3>
                    <p>Learning game development has been a rewarding journey where I’ve gained valuable skills in programming, design, and problem-solving. It has pushed me to be both creative and technical, transforming ideas into interactive experiences. </p>
                    </div>
                 </div>
              </div>
              </div>
           </div>
        </div>
        </>
    );
}

export default Experience