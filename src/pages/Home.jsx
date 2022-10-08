import HomeBanner from "../components/Section/HomeBanner";
import ProjectSection from "../components/Section/ProjectSection";
import ResumeSection from "../components/Section/ResumeSection";

const Home = () => {
  return (
    <div className="container">
      <section className='section section--border pt-0' >
        <HomeBanner />
      </section>
      <section className='section section--border' >
        <ProjectSection />
      </section>
      <section className='section section--border' >
        <ResumeSection />
      </section>
      
    </div>
  )
}

export default Home