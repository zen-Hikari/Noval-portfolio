import './About.css'
import Human from './assets/Human-1.png'

function AboutPage() {

    return(
        <>
        <div id='about' className="about">
           <div className="container">
            <h3>ABOUT ME</h3>
              <div className="about-card">
                <div className="about-card-0">
                   <div className="about-img">
                      <img src={Human} alt="" />
                    </div>
                 </div>
                <div className="card-compt">

                 <div className="about-card-1">
                   <div className="about-img">
                      <i className="ai-laptop-device"></i>
                    </div>

                    <div className="about-card-desc">
                     <h5>Front-End Developer</h5>
                     <p>I am a Front-End Developer focused on creating interactive, modern, and user-friendly user interfaces</p>

                    </div>
                 </div>

                 <div className="about-card-2">
                   <div className="about-img">
                   <i className="ai-game-controller"></i>
                    </div>

                    <div className="about-card-desc-2">
                     <h5>Game Developer</h5>
                     <p>I am passionate about game development, with a focus on building immersive gaming experiences</p>

                    </div>
                 </div>

                 <div className="about-card-3">
                   <div className="about-img">
                      <i className="ai-bug"></i>
                   </div>

                   <div className="about-card-desc-3">
                     <h5>Bug Developer</h5>
                     <p>As a Bug Developer, I have sharp analytical skills to find and fix bugs in applications</p>

                   </div>
                 </div>
                </div>

              </div>
           </div>
        </div>
        </>
    );
}

export default AboutPage