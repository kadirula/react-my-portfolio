import AuthForm from "../components/AuthForm"

const Register = () => {
  return (
    <section className='section'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <AuthForm page='register' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register