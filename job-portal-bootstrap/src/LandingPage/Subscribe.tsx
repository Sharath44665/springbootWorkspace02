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

          
        </>
    )
}

export default Subscribe;