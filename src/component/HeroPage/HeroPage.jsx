import './HeroPage.css'
import HeroImg from './assets/hero.png'

function HeroPage() {

    return (
        <>
         <div className="hero">
               <div className="hero-flex">
                  <div className="hero-text">
                  <div className="overlay2"></div> 
                  <div className="overlay"></div> 
                    <h1>Hi There, Im Noval I`m a <span className="text-break">Front-End Developer</span></h1>
                    <p>As a junior front-end developer, I aspire to grow and become a professional, <span className="text-break"> mastering advanced techniques and delivering high-quality web applications.</span></p>
                    <div className="btn-div">
                        <a className="btn" href="#">
                            Explore
                          <i className="ai-arrow-forward-thick-fill"></i>
                        </a>
                        
                        <div className="icon">
                          <i className="icons ai-github-fill"></i>
                          <i className="icons ai-linkedin-box-fill"></i>
                          <i className="icons ai-instagram-fill"></i>
                        </div>
                    </div>
                  </div>

                  {/* img compt */}

                  <div className="hero-img">
                    <img src={HeroImg} alt="Hero" />
                  </div>
               </div> 
         </div>
        </>
    );
}

export default HeroPage