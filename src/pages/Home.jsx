import HomeBanner from "../components/Section/HomeBanner";
import ProjectSection from "../components/Section/ProjectSection";
import ResumeSection from "../components/Section/ResumeSection";

const Home = () => {
  return (
    <div className="container">
      <section className='section pt-0'>
        <HomeBanner />
      </section>
      <section className='section'>
        <ProjectSection />
      </section>
       <section className='section'>
        <ResumeSection />
      </section>
    </div>
  )
}

export default Home