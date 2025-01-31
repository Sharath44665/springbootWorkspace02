
const Dreamjob = () => {
    return (
        <>
            <main>
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="/animejob.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            <div style={{ placeItems: 'center' }}>
                                <div className="card">
                                    <div className="card-body">
                                        10K + got job
                                    </div>
                                </div>
                                <div className="card" style={{ 'width': '18rem' }}>
                                    <div className="card-body">

                                        <h5 className="card-title "><i className="bi bi-google mx-3"></i>Software Engineer</h5>
                                        <h6 className="card-subtitle mx-4 text-body-secondary">New York</h6>
                                        <p className="card-text">1 day ago, 120 applicants</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"style={{textTransform:'capitalize'}} >find your Dream job</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <div className="row g-2">
                                    <div className="col-md">
                                        <label htmlFor="jt">Job Title</label>
                                        <input type="email" className="form-control" id="jt" placeholder="Software Engineer" />
                                    </div>

                                    <div className="col-md">
                                        <label htmlFor="jtype">Job Type</label>
                                        <input type="email" className="form-control" id="jtype" placeholder="Full Time" />
                                    </div>


                                </div>

                                <i className="bi bi-search my-4" style={{
                                    'fontSize': '20px', 'cursor': 'pointer'
                                }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dreamjob;