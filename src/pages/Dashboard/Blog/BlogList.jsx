import AdminSidebar from '../../../components/Dashboard/AdminSidebar';

const BlogList = () => {

    const data = [{
        msg: 'Hello',
        num: 1
    }, {
        msg: 'Hey',
        num: 2
    }, {
        msg: 'Hi',
        num: 3
    }, {
        msg: 'Bye',
        num: 4
    }, {
        msg: 'Welcome',
        num: 5
    }, {
        msg: 'Thanks',
        num: 6
    }]

    const columns = [{
        Header: 'Message',
        accessor: 'msg'
    }, {
        Header: 'Number',
        accessor: 'num'
    }]
    return (

        <div className='section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-8">
                        {/* <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={2}
                            pageSizeOptions={[2, 4, 6]}
                        /> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogList