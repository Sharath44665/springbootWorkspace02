import { work } from "../Data/Data";

function Working() {
    return (
        <>
            <div className="px-2 my-5 text-center">
                

                <div className="text-center fs-1 mt-3" style={{ textTransform: 'capitalize' }}>
                    how it  <span className="text-primary">works</span>
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur itaque odit non ipsa iste quaerat?</p>

                </div>
            </div>

            {/* girl image with description */}
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        {/* content  */}
                        {
                            work.map((workItem, idx) => <div key={idx} className="col d-flex align-items-start">
                                <div className="icon-square  bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                    {/* some icon  */}

                                    <img style={{ height: '50px' }} src={`/Working/${workItem.name}.png`} alt={workItem.name} />
                                </div>
                                <div>
                                    <h3 className="fs-2 text-body-emphasis">{workItem.name}</h3>
                                    <p>{workItem.desc}</p>

                                </div>
                            </div>)
                        }
                    </div>
                    <div className="col-lg-6">
                        <img style={{ height: '500px' }} src="/Working/Girl.png" alt="girl" />

                    </div>
                </div>
                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: '75%' }}>Complete your profile: 75% completed</div>
            </div>
            </div>

            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                <h2 className="fw-normal">Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
        </>
    )
}

export default Working;