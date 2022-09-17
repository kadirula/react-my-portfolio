import AdminSidebar from '../../components/Dashboard/AdminSidebar';

const Admin = () => {
  return (
    <div className='section'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <AdminSidebar />
                </div>
                <div className="col-md-8">
                    Admin Home Page
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Admin