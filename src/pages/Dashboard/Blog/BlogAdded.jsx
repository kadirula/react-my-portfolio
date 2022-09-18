import AdminSidebar from '../../../components/Dashboard/AdminSidebar';
import BlogForm from '../../../components/Form/BlogForm';

const BlogAdded = () => {
  return (
    <div className='section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-8">
                      <BlogForm />
                    </div>
                </div>
            </div>


        </div>
  )
}

export default BlogAdded