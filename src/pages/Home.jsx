import HomeBanner from "../components/HomeBanner";
import ProjectSection from "../components/ProjectSection";
import ResumeSection from "../components/ResumeSection";

const Home = () => {
  return (
    <div className="container">
      <HomeBanner />
      <ProjectSection />
      <ResumeSection />
    </div>
  )
}

export default Home