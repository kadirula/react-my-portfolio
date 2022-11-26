import CustomTabs from "../Tabs/CustomTabs"
import Heading from "../Heading";


const ResumeSection = () => {

    return (
        <div className="row">
            <div className="col-md-12 mb-5">
                <Heading title='MY RESUME' />
            </div>
            <div className="col-md-12">
                <CustomTabs />
            </div>
        </div>
    )
}

export default ResumeSection