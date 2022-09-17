import BlogList from '../components/BlogList';

const index = () => {
  return (
    <section className='section'>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <BlogList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default index