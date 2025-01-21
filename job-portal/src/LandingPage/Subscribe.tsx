function Subscribe() {
    return (
        <>
            <div className="px-2 my-5 text-center">

            </div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">

                        <div className="display-4 fw-bold lh-1 text-body-emphasis" style={{ textTransform: 'capitalize' }}>
                            never want to miss any <span className="text-primary">job news</span>?
                        </div>
                        
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            
                    
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Subscribe</button>
                            
                        </form>
                    </div>
                </div>
            </div>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">

                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                            <hr className="my-4" />
                            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe;