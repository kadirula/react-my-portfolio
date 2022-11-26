import HomeBanner from "../components/Section/HomeBanner";
import ProjectSection from "../components/Section/ProjectSection";
import ResumeSection from "../components/Section/ResumeSection";

const Home = () => {
  return (
    <>
      <section className='section pt-0' id="home">
        <HomeBanner />
      </section>
      <section className='section' id="project">
        <ProjectSection />
      </section>
      <section className='section' id="resume">
        <ResumeSection />
      </section>

    </>
  )
}

export default Home