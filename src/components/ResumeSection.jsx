import CustomTabs from "./Tabs/CustomTabs"


const ResumeSection = () => {
    
    return (
        <section className="section resume-section">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="text-center">
                        <h3 className="title">ÖZGEÇMİŞİM</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CustomTabs />
                </div>
            </div>
        </section>
    )
}

export default ResumeSection