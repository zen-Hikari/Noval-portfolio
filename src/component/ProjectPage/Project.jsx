import "./Project.css";
import Project from "./assets/project-top-up.png";
import Vegetable from './assets/project-2.png'
import Tetris from './assets/project-3.png'
import Cerpen from './assets/project-4.png'


function ProjectPage() {
  return (
    <>
      <div id="project" className="project">
          <div className="project-title">
            <button>TOP PROJECT</button>
          </div>
      <div className="overlay5"></div>
      <div className="overlay6"></div>
          <div className="project-card-compt">
            <div className="project-card">
              <img src={Project} alt="Gambar Proyek" />
              <div className="description">
                <h3>NVL-Top-Up</h3>
                <p>
                  My First Top Project Was a Top Up Web Page Landing Project Using the React Js Library
                </p>
                <div className="link">
                <a href="https://zen-hikari.github.io/NVL_Top-Up/" target="_blank">
                  SEE PROJECT
                </a>
                  <i className="ai-arrow-forward-thick"></i>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={Vegetable} alt="Gambar Proyek" />
              <div className="description">
                <h3>VEGETABLESHOP</h3>
                <p>
                  My Second Top Project is the VegetableShop Project Using the React Js Library
                </p>
                <div className="link">
                <a href="https://zen-hikari.github.io/vegetablesShop/" target="_blank">
                  SEE PROJECT
                </a>
                  <i className="ai-arrow-forward-thick"></i>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={Tetris} alt="Gambar Proyek" />
              <div className="description">
                <h3>TETRIS GAME</h3>
                <p>
                   My third top project is a landing page game project created using the pygame library. This project uses the React Js library
                </p>
                <div className="link">
                <a href="https://zen-hikari.github.io/Tetris/" target="_blank">
                  SEE PROJECT
                </a>
                  <i className="ai-arrow-forward-thick"></i>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={Cerpen} alt="Gambar Proyek" />
              <div className="description">
                <h3>NvL-CerpenVerse</h3>
                <p>
                  My third top project is an online novel or short story reading project. This project uses the React Js library
                </p>
                <div className="link">
                <a href="https://nvl-cerpenverse.vercel.app/" target="_blank">
                  SEE PROJECT
                </a>
                  <i className="ai-arrow-forward-thick"></i>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={Project} alt="Gambar Proyek" />
              <div className="description">
                <h3>Judul Proyek</h3>
                <p>
                  Deskripsi singkat tentang proyek ini. Saat di-hover, teks ini
                  akan muncul.
                </p>
                <div className="link">
                <a href="https://zen-hikari.github.io/NVL_Top-Up/" target="_blank">
                  SEE PROJECT
                </a>
                  <i className="ai-arrow-forward-thick"></i>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={Project} alt="Gambar Proyek" />
              <div className="description">
                <h3>Judul Proyek</h3>
                <p>
                  Deskripsi singkat tentang proyek ini. Saat di-hover, teks ini
                  akan muncul.
                </p>
                <div className="link">
                <a href="https://zen-hikari.github.io/NVL_Top-Up/" target="_blank">
                  SEE PROJECT
                </a>
                  <i className="ai-arrow-forward-thick"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default ProjectPage;
