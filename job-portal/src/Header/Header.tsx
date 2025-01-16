import Avatar from "./Avatar";
import NoitficationBell from "./NotificationBell";
import { NavLink } from "react-router";


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
                <div className="container-fluid">
                <i className="bi bi-person-arms-up mx-2" style={{"color":"white"}}></i>
                    <NavLink className="navbar-brand" to="/">iJobs</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/findjob">Find Jobs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/findtalent">Find Talent</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/uploadjob">Upload Job</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
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
            
        </>
    )
}

export default Header;