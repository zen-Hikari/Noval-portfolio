import './App.css'
import Navbar from './component/Navbar/Navbar'
import HeroPage from './component/HeroPage/HeroPage'
import SkillPage from './component/SkillPage/Skill'
import ExperiencePage from './component/ExperiencePage/Experience'
import AboutPage from './component/AboutPage/About'
import ProjectPage from './component/ProjectPage/Project'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <HeroPage />
        <SkillPage />
        <ExperiencePage />
        <AboutPage />
        <ProjectPage />
      </div>
    </>
  )
}

export default App
