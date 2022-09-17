import AdminSidebar from '../../../components/Dashboard/AdminSidebar';

const BlogList = () => {

    const data = [
        {
            author: 'Kadir Ula',
            title: 'Blog - 1',
            createdAt: '12.01.2022'
        },
        {
            author: 'Hello',
            title: 'Blog - 2',
            createdAt: '12.02.2022'
        },

    ]

    const columns = [
        {
            Header: 'Author',
            accessor: 'author'
        },
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'CreatedAt',
            accessor: 'create'
        },
    ]
    return (

        <div className='section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="table-responsive">
                            <table className='blog-table table  table-striped table-dark table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Author</th>
                                        <th>Title</th>
                                        <th>CreatedAt</th>
                                        <th>İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.author}</td>
                                                <td>{item.title}</td>
                                                <td>{item.createdAt}</td>
                                                <td>
                                                    <a href="#">Güncelle</a>
                                                    <a href="#">Sil</a>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogList