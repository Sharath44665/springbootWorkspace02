import Avatar from "./Avatar";
import NoitficationBell from "./NotificationBell";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
                <div className="container-fluid">
                <i className="bi bi-person-arms-up mx-2" style={{"color":"white"}}></i>
                    <a className="navbar-brand" href="#">iJobs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-2" role="search">
                            <NoitficationBell />
                            <Avatar />
                            <div style={{'color':'white', 'cursor': 'pointer'}}>
                                Sharath
                            </div>
                            <i className="bi bi-gear" style={{'color':'white', 'cursor': 'pointer'}}></i>
                        </div>
                    </div>
                </div>
            </nav>
            <h1>My header</h1>
        </>
    )
}

export default Header;