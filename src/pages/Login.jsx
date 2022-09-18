import AuthForm from "../components/Form/AuthForm"
const index = () => {
  return (
    <section className='section'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <AuthForm page='login' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default index